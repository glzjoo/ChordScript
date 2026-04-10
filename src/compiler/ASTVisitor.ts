import { Environment } from './Environment';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {
    ChordScriptVisitor
} from '../generated/ChordScriptVisitor';
import {
    ProgramContext,
    Var_declContext,
    Class_declContext,
    If_stmtContext,
    Expr_stmtContext,
    ExprContext,
    TermContext,
    InstantiationContext,
    Method_callContext,
    Loop_stmtContext
} from '../generated/ChordScriptParser';
import { ChordScriptParser } from '../generated/ChordScriptParser';
import * as Tone from 'tone';

export class ChordScriptASTVisitor extends AbstractParseTreeVisitor<any> implements ChordScriptVisitor<any> {

    private currentEnv = new Environment();

    // Initialize a master synthesizer for the interpreter
    private synth = new Tone.Synth().toDestination();

    // Track time so notes play in sequence, not all at once
    private currentTimeOffset = 0;

    protected defaultResult(): any {
        return null;
    }

    // ─── Program: Reset clock, walk all declarations ─────────────
    visitProgram(ctx: ProgramContext): any {
        this.currentTimeOffset = 0;
        return this.visitChildren(ctx);
    }

    // ─── Class Declaration: Register class name (minimal) ────────
    visitClass_decl(ctx: Class_declContext): any {
        const className = ctx.ID(0).text;
        this.currentEnv.define(className, { __class: true, name: className });
        console.log(`Interpreter: Registered class '${className}'.`);
        return null;
    }

    // ─── Variable Declaration: Evaluate RHS, store in environment ─
    visitVar_decl(ctx: Var_declContext): any {
        const name = ctx.ID().text;
        const value = this.visit(ctx.expr());
        this.currentEnv.define(name, value);
        console.log(`Interpreter: Declared '${name}' = ${JSON.stringify(value)}`);
        return null;
    }

    // ─── Expression Statement: Evaluate the expression ───────────
    visitExpr_stmt(ctx: Expr_stmtContext): any {
        return this.visit(ctx.expr());
    }

    // ─── Expression: Dispatch to the correct sub-rule ────────────
    visitExpr(ctx: ExprContext): any {
        // Case 1: Simple term (NOTE, DURATION, NUMBER, ID)
        if (ctx.term()) {
            return this.visit(ctx.term()!);
        }

        // Case 2: Method call (e.g. mySynth.play(...))
        if (ctx.method_call()) {
            return this.visit(ctx.method_call()!);
        }

        // Case 3: Instantiation (e.g. new Instrument())
        if (ctx.instantiation()) {
            return this.visit(ctx.instantiation()!);
        }

        // Case 4: Binary expression (e.g. x + y, a == b)
        const exprs = ctx.expr();
        if (exprs.length === 2) {
            const left = this.visit(exprs[0]);
            const right = this.visit(exprs[1]);

            if (ctx.PLUS())  return left + right;
            if (ctx.MINUS()) return left - right;
            if (ctx.EQ())    return left === right;
            if (ctx.NEQ())   return left !== right;
        }

        return this.visitChildren(ctx);
    }

    // ─── Term: Extract raw values from terminal tokens ───────────
    visitTerm(ctx: TermContext): any {
        // NUMBER → parse as integer (e.g. "4" → 4)
        if (ctx.NUMBER()) {
            return parseInt(ctx.NUMBER()!.text, 10);
        }

        // NOTE → return text as-is (e.g. "C4", "G3")
        if (ctx.NOTE()) {
            return ctx.NOTE()!.text;
        }

        // DURATION → return text as-is (e.g. "Quarter", "Eighth")
        if (ctx.DURATION()) {
            return ctx.DURATION()!.text;
        }

        // ID → look up variable in the environment
        if (ctx.ID()) {
            const name = ctx.ID()!.text;
            try {
                return this.currentEnv.get(name);
            } catch {
                // Return the raw identifier text if not found
                // (handles cases like class names used as types)
                return name;
            }
        }

        // Track literal → delegate
        if (ctx.track_literal()) {
            return this.visit(ctx.track_literal()!);
        }

        return null;
    }

    // ─── Instantiation: Create a simple object marker ────────────
    visitInstantiation(ctx: InstantiationContext): any {
        const className = ctx.ID().text;
        console.log(`Interpreter: new ${className}()`);
        return { __instance: true, type: className };
    }

    // ─── Loop Statement: Evaluate count, repeat body ─────────────
    visitLoop_stmt(ctx: Loop_stmtContext): any {
        const count = this.visit(ctx.expr());

        console.log(`Interpreter: Looping ${count} times.`);

        for (let i = 0; i < count; i++) {
            this.visit(ctx.stmt_list());
        }

        return null;
    }

    // ─── Method Call: Dispatch .play() to Tone.js ────────────────
    visitMethod_call(ctx: Method_callContext): any {
        const objectName = ctx.ID(0).text;
        const methodName = ctx.ID(1).text;

        // Evaluate the arguments (e.g., Note and Duration)
        const args = ctx.arg_list()
            ? ctx.arg_list()!.expr().map(argCtx => this.visit(argCtx))
            : [];

        console.log(`Interpreter: Executing ${objectName}.${methodName}(${args.join(', ')})`);

        if (methodName === 'play') {
            const note = args[0];        // e.g., 'C4'
            const rawDuration = args[1]; // e.g., 'Quarter'

            // Map ChordScript durations to Tone.js notation
            let toneDuration = "4n"; // default: Quarter
            if (rawDuration === "Eighth")  toneDuration = "8n";
            if (rawDuration === "Half")    toneDuration = "2n";
            if (rawDuration === "Whole")   toneDuration = "1m";
            if (rawDuration === "Quarter") toneDuration = "4n";

            console.log(`  → triggerAttackRelease("${note}", "${toneDuration}", now + ${this.currentTimeOffset.toFixed(3)}s)`);

            // Schedule the note to play at the current offset
            this.synth.triggerAttackRelease(note, toneDuration, Tone.now() + this.currentTimeOffset);

            // Advance the time offset for the NEXT note
            this.currentTimeOffset += Tone.Time(toneDuration).toSeconds();

            return null;
        }

        throw new Error(`Interpreter Error: Unknown method '${methodName}' on object '${objectName}'`);
    }

    // ─── If Statement: Evaluate condition, run branch ────────────
    visitIf_stmt(ctx: If_stmtContext): any {
        const condition = this.visit(ctx.expr());

        if (condition) {
            this.visit(ctx.stmt_list(0));
        } else if (ctx.stmt_list().length > 1) {
            this.visit(ctx.stmt_list(1));
        }

        return null;
    }
}