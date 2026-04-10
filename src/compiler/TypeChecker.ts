// ═══════════════════════════════════════════════════════════════════
// TypeChecker.ts — Static Type Checker for the ChordScript Compiler
// ═══════════════════════════════════════════════════════════════════
//
// Performs a full AST walk BEFORE execution to catch type errors
// early. Validates:
//   • All variables are declared before use
//   • Declared types match their assigned expression types
//   • Binary operator operands are type-compatible
//   • Loop counts are Numbers
//   • Method calls reference declared objects
//   • Instantiations reference declared classes
//   • No duplicate declarations in the same scope
//   • Function parameters and arguments are checked
// ═══════════════════════════════════════════════════════════════════

import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ChordScriptVisitor } from '../generated/ChordScriptVisitor';
import {
    ProgramContext,
    Decl_listContext,
    DeclContext,
    Class_declContext,
    Class_memberContext,
    Var_declContext,
    TypeContext,
    Func_declContext,
    Param_listContext,
    Stmt_listContext,
    StmtContext,
    If_stmtContext,
    Loop_stmtContext,
    Return_stmtContext,
    Expr_stmtContext,
    ExprContext,
    Method_callContext,
    InstantiationContext,
    TermContext,
    Track_literalContext,
} from '../generated/ChordScriptParser';
import { SymbolTable, ChordScriptType, SymbolEntry } from './SymbolTable';

// ─── Type Error Representation ───────────────────────────────────
export interface TypeErrorInfo {
    message: string;
    line: number;
    column: number;
}

// ─── Built-in Types ──────────────────────────────────────────────
const BUILT_IN_TYPES = new Set<string>(['Note', 'Duration', 'Number', 'Track']);

// ═════════════════════════════════════════════════════════════════
// TypeChecker — Visitor-based static analyser
// ═════════════════════════════════════════════════════════════════
export class TypeChecker
    extends AbstractParseTreeVisitor<ChordScriptType>
    implements ChordScriptVisitor<ChordScriptType>
{
    private symbolTable = new SymbolTable();
    private errors: TypeErrorInfo[] = [];

    // ─── Public API ─────────────────────────────────────────────

    /** Run type checking on a parsed program tree. Returns collected errors. */
    check(tree: ProgramContext): TypeErrorInfo[] {
        this.errors = [];
        this.symbolTable = new SymbolTable();
        this.visit(tree);
        return this.errors;
    }

    /** Access the symbol table after checking (useful for IDE features). */
    getSymbolTable(): SymbolTable {
        return this.symbolTable;
    }

    // ─── Helpers ────────────────────────────────────────────────

    protected defaultResult(): ChordScriptType {
        return 'void';
    }

    private addError(msg: string, line: number, column: number): void {
        this.errors.push({ message: msg, line, column });
    }

    /**
     * Checks whether `actual` is assignable to `expected`.
     * - Same type → always OK
     * - If expected is a user-defined class, actual must match exactly
     *   (or be a class that extends it — inheritance check)
     */
    private isAssignable(expected: ChordScriptType, actual: ChordScriptType): boolean {
        if (expected === actual) return true;

        // Allow any class type to satisfy its parent class
        if (!BUILT_IN_TYPES.has(actual)) {
            const classSym = this.symbolTable.resolve(actual);
            if (classSym && classSym.kind === 'class' && classSym.parentClass) {
                return this.isAssignable(expected, classSym.parentClass);
            }
        }

        return false;
    }

    /** Extract the text of a `type` rule node. */
    private extractTypeName(ctx: TypeContext): ChordScriptType {
        return ctx.text; // 'Note' | 'Duration' | 'Number' | 'Track' | ID
    }

    // ═════════════════════════════════════════════════════════════
    // Visitor Methods
    // ═════════════════════════════════════════════════════════════

    // ─── Program ────────────────────────────────────────────────
    visitProgram(ctx: ProgramContext): ChordScriptType {
        this.visitChildren(ctx);
        return 'void';
    }

    // ─── Declaration List ───────────────────────────────────────
    visitDecl_list(ctx: Decl_listContext): ChordScriptType {
        for (const decl of ctx.decl()) {
            this.visit(decl);
        }
        return 'void';
    }

    // ─── Declaration Dispatch ───────────────────────────────────
    visitDecl(ctx: DeclContext): ChordScriptType {
        return this.visitChildren(ctx);
    }

    // ─── Class Declaration ──────────────────────────────────────
    visitClass_decl(ctx: Class_declContext): ChordScriptType {
        const ids = ctx.ID();
        const className = ids[0].text;
        const line = ctx.start.line;
        const col = ctx.start.charPositionInLine;

        // Check for duplicate class name
        if (this.symbolTable.hasLocal(className)) {
            this.addError(
                `Duplicate declaration: class '${className}' is already defined in this scope.`,
                line, col,
            );
        }

        // Resolve parent class if extends is present
        let parentClass: string | undefined;
        if (ids.length > 1) {
            parentClass = ids[1].text;
            const parentSym = this.symbolTable.resolve(parentClass);
            if (!parentSym || parentSym.kind !== 'class') {
                this.addError(
                    `Class '${className}' extends unknown class '${parentClass}'.`,
                    line, col,
                );
            }
        }

        // Collect class members
        const members = new Map<string, SymbolEntry>();

        // Enter a scope for the class body
        this.symbolTable.enterScope();

        for (const member of ctx.class_member()) {
            if (member.var_decl()) {
                this.visit(member.var_decl()!);
                const varName = member.var_decl()!.ID().text;
                const sym = this.symbolTable.resolve(varName);
                if (sym) members.set(varName, sym);
            }
            if (member.func_decl()) {
                this.visit(member.func_decl()!);
                const funcName = member.func_decl()!.ID().text;
                const sym = this.symbolTable.resolve(funcName);
                if (sym) members.set(funcName, sym);
            }
        }

        this.symbolTable.exitScope();

        // Register the class in the enclosing scope
        this.symbolTable.defineClass(className, parentClass, members, line, col);

        return className;
    }

    // ─── Class Member ───────────────────────────────────────────
    visitClass_member(ctx: Class_memberContext): ChordScriptType {
        return this.visitChildren(ctx);
    }

    // ─── Variable Declaration ───────────────────────────────────
    visitVar_decl(ctx: Var_declContext): ChordScriptType {
        const varName = ctx.ID().text;
        const declaredType = this.extractTypeName(ctx.type());
        const line = ctx.start.line;
        const col = ctx.start.charPositionInLine;

        // Validate the declared type exists
        if (!BUILT_IN_TYPES.has(declaredType)) {
            const classSym = this.symbolTable.resolve(declaredType);
            if (!classSym || classSym.kind !== 'class') {
                this.addError(
                    `Unknown type '${declaredType}' in declaration of '${varName}'.`,
                    line, col,
                );
            }
        }

        // Type-check the initialiser expression
        const exprType = this.visit(ctx.expr());

        // Verify type compatibility
        if (exprType !== 'void' && exprType !== 'unknown' && !this.isAssignable(declaredType, exprType)) {
            this.addError(
                `Type mismatch: cannot assign '${exprType}' to variable '${varName}' of type '${declaredType}'.`,
                line, col,
            );
        }

        // Check for duplicate in same scope
        if (this.symbolTable.hasLocal(varName)) {
            this.addError(
                `Duplicate declaration: variable '${varName}' is already defined in this scope.`,
                line, col,
            );
        }

        this.symbolTable.defineVariable(varName, declaredType, line, col);

        return declaredType;
    }

    // ─── Type Node ──────────────────────────────────────────────
    visitType(ctx: TypeContext): ChordScriptType {
        return this.extractTypeName(ctx);
    }

    // ─── Function Declaration ───────────────────────────────────
    visitFunc_decl(ctx: Func_declContext): ChordScriptType {
        const funcName = ctx.ID().text;
        const line = ctx.start.line;
        const col = ctx.start.charPositionInLine;

        const paramNames: string[] = [];
        const paramTypes: ChordScriptType[] = [];

        // Parse parameter list
        if (ctx.param_list()) {
            const paramCtx = ctx.param_list()!;
            const ids = paramCtx.ID();
            const types = paramCtx.type();

            for (let i = 0; i < ids.length; i++) {
                paramNames.push(ids[i].text);
                paramTypes.push(this.extractTypeName(types[i]));
            }
        }

        // Check for duplicate function name
        if (this.symbolTable.hasLocal(funcName)) {
            this.addError(
                `Duplicate declaration: function '${funcName}' is already defined in this scope.`,
                line, col,
            );
        }

        // Register function before body (allows recursion)
        this.symbolTable.defineFunction(funcName, paramNames, paramTypes, line, col);

        // Enter function body scope
        this.symbolTable.enterScope();

        // Define parameters as local variables
        for (let i = 0; i < paramNames.length; i++) {
            this.symbolTable.defineVariable(paramNames[i], paramTypes[i], line, col);
        }

        // Visit function body
        this.visit(ctx.stmt_list());

        this.symbolTable.exitScope();

        return 'void';
    }

    // ─── Statement List ─────────────────────────────────────────
    visitStmt_list(ctx: Stmt_listContext): ChordScriptType {
        for (const stmt of ctx.stmt()) {
            this.visit(stmt);
        }
        return 'void';
    }

    // ─── Statement ──────────────────────────────────────────────
    visitStmt(ctx: StmtContext): ChordScriptType {
        return this.visitChildren(ctx);
    }

    // ─── If Statement ───────────────────────────────────────────
    visitIf_stmt(ctx: If_stmtContext): ChordScriptType {
        // Type-check condition
        this.visit(ctx.expr());

        // Then branch (new scope)
        this.symbolTable.enterScope();
        this.visit(ctx.stmt_list(0));
        this.symbolTable.exitScope();

        // Else branch (new scope)
        if (ctx.stmt_list().length > 1) {
            this.symbolTable.enterScope();
            this.visit(ctx.stmt_list(1));
            this.symbolTable.exitScope();
        }

        return 'void';
    }

    // ─── Loop Statement ─────────────────────────────────────────
    visitLoop_stmt(ctx: Loop_stmtContext): ChordScriptType {
        const countType = this.visit(ctx.expr());
        const line = ctx.start.line;
        const col = ctx.start.charPositionInLine;

        // The loop count must be a Number
        if (countType !== 'Number' && countType !== 'void' && countType !== 'unknown') {
            this.addError(
                `Loop count must be of type 'Number', but got '${countType}'.`,
                line, col,
            );
        }

        // Loop body (new scope)
        this.symbolTable.enterScope();
        this.visit(ctx.stmt_list());
        this.symbolTable.exitScope();

        return 'void';
    }

    // ─── Return Statement ───────────────────────────────────────
    visitReturn_stmt(ctx: Return_stmtContext): ChordScriptType {
        return this.visit(ctx.expr());
    }

    // ─── Expression Statement ───────────────────────────────────
    visitExpr_stmt(ctx: Expr_stmtContext): ChordScriptType {
        return this.visit(ctx.expr());
    }

    // ─── Expression ─────────────────────────────────────────────
    visitExpr(ctx: ExprContext): ChordScriptType {
        // Case 1: Simple term
        if (ctx.term()) {
            return this.visit(ctx.term()!);
        }

        // Case 2: Method call
        if (ctx.method_call()) {
            return this.visit(ctx.method_call()!);
        }

        // Case 3: Instantiation
        if (ctx.instantiation()) {
            return this.visit(ctx.instantiation()!);
        }

        // Case 4: Binary expression   expr op expr
        const exprs = ctx.expr();
        if (exprs.length === 2) {
            const leftType = this.visit(exprs[0]);
            const rightType = this.visit(exprs[1]);
            const line = ctx.start.line;
            const col = ctx.start.charPositionInLine;

            // Arithmetic operators (+, -) require Number operands
            if (ctx.PLUS() || ctx.MINUS()) {
                if (leftType !== 'Number' && leftType !== 'unknown') {
                    this.addError(
                        `Left operand of '${ctx.PLUS() ? '+' : '-'}' must be 'Number', got '${leftType}'.`,
                        line, col,
                    );
                }
                if (rightType !== 'Number' && rightType !== 'unknown') {
                    this.addError(
                        `Right operand of '${ctx.PLUS() ? '+' : '-'}' must be 'Number', got '${rightType}'.`,
                        line, col,
                    );
                }
                return 'Number';
            }

            // Equality operators (==, !=) — operands must have the same type
            if (ctx.EQ() || ctx.NEQ()) {
                if (
                    leftType !== 'unknown' && rightType !== 'unknown' &&
                    leftType !== rightType
                ) {
                    this.addError(
                        `Cannot compare '${leftType}' with '${rightType}' using '${ctx.EQ() ? '==' : '!='}'.`,
                        line, col,
                    );
                }
                return 'Number'; // comparison yields a numeric truth value (0/1)
            }
        }

        return this.visitChildren(ctx);
    }

    // ─── Method Call ────────────────────────────────────────────
    visitMethod_call(ctx: Method_callContext): ChordScriptType {
        const objectName = ctx.ID(0).text;
        const methodName = ctx.ID(1).text;
        const line = ctx.start.line;
        const col = ctx.start.charPositionInLine;

        // Verify the object is declared
        const objSym = this.symbolTable.resolve(objectName);
        if (!objSym) {
            this.addError(
                `Undefined variable '${objectName}' in method call '${objectName}.${methodName}(...)'.`,
                line, col,
            );
        }

        // Type-check all arguments
        if (ctx.arg_list()) {
            for (const argExpr of ctx.arg_list()!.expr()) {
                this.visit(argExpr);
            }
        }

        // Built-in method validation: .play(Note, Duration)
        if (methodName === 'play' && ctx.arg_list()) {
            const argExprs = ctx.arg_list()!.expr();
            if (argExprs.length !== 2) {
                this.addError(
                    `Method '${methodName}' expects 2 arguments (Note, Duration), but got ${argExprs.length}.`,
                    line, col,
                );
            } else {
                const arg0Type = this.visit(argExprs[0]);
                const arg1Type = this.visit(argExprs[1]);

                if (arg0Type !== 'Note' && arg0Type !== 'unknown') {
                    this.addError(
                        `First argument of '.play()' must be a Note, but got '${arg0Type}'.`,
                        line, col,
                    );
                }
                if (arg1Type !== 'Duration' && arg1Type !== 'unknown') {
                    this.addError(
                        `Second argument of '.play()' must be a Duration, but got '${arg1Type}'.`,
                        line, col,
                    );
                }
            }
        }

        return 'void';
    }

    // ─── Instantiation ──────────────────────────────────────────
    visitInstantiation(ctx: InstantiationContext): ChordScriptType {
        const className = ctx.ID().text;
        const line = ctx.start.line;
        const col = ctx.start.charPositionInLine;

        // Verify the class is declared
        const classSym = this.symbolTable.resolve(className);
        if (!classSym || classSym.kind !== 'class') {
            this.addError(
                `Cannot instantiate unknown class '${className}'.`,
                line, col,
            );
        }

        // Type-check constructor arguments (if any)
        if (ctx.arg_list()) {
            for (const argExpr of ctx.arg_list()!.expr()) {
                this.visit(argExpr);
            }
        }

        return className; // The instantiation has the type of the class
    }

    // ─── Term ───────────────────────────────────────────────────
    visitTerm(ctx: TermContext): ChordScriptType {
        if (ctx.NUMBER()) return 'Number';
        if (ctx.NOTE())   return 'Note';
        if (ctx.DURATION()) return 'Duration';

        if (ctx.ID()) {
            const name = ctx.ID()!.text;
            const sym = this.symbolTable.resolve(name);
            if (!sym) {
                this.addError(
                    `Undefined variable '${name}'.`,
                    ctx.start.line,
                    ctx.start.charPositionInLine,
                );
                return 'unknown';
            }
            return sym.type;
        }

        if (ctx.track_literal()) {
            return this.visit(ctx.track_literal()!);
        }

        return 'unknown';
    }

    // ─── Track Literal ──────────────────────────────────────────
    visitTrack_literal(ctx: Track_literalContext): ChordScriptType {
        // Type-check all elements inside the track literal
        if (ctx.arg_list()) {
            for (const argExpr of ctx.arg_list()!.expr()) {
                this.visit(argExpr);
            }
        }
        return 'Track';
    }
}
