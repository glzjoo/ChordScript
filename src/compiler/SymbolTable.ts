// ═══════════════════════════════════════════════════════════════════
// SymbolTable.ts — Symbol Table for the ChordScript Compiler
// ═══════════════════════════════════════════════════════════════════
//
// Tracks declared variables, functions, and classes across scoped
// environments. Used by the TypeChecker to validate declarations,
// resolve identifiers, and enforce type rules before execution.
// ═══════════════════════════════════════════════════════════════════

// ─── ChordScript Built-in Types ──────────────────────────────────
export type ChordScriptType =
    | 'Note'
    | 'Duration'
    | 'Number'
    | 'Track'
    | string;   // User-defined class types (e.g. "Instrument")

// ─── Symbol Kinds ────────────────────────────────────────────────
export type SymbolKind = 'variable' | 'function' | 'class' | 'parameter';

// ─── Symbol Entry ────────────────────────────────────────────────
export interface SymbolEntry {
    name: string;
    kind: SymbolKind;
    type: ChordScriptType;
    /** Line number in source (for error reporting) */
    line: number;
    /** Column number in source (for error reporting) */
    column: number;
    /** For functions: parameter types in order */
    paramTypes?: ChordScriptType[];
    /** For functions: parameter names in order */
    paramNames?: string[];
    /** For classes: name of the parent class, if any */
    parentClass?: string;
    /** For classes: member symbols (fields + methods) */
    members?: Map<string, SymbolEntry>;
}

// ─── Scope ───────────────────────────────────────────────────────
// Each scope holds its own symbols and a reference to its parent.
class Scope {
    public symbols = new Map<string, SymbolEntry>();
    public parent: Scope | null;

    constructor(parent: Scope | null = null) {
        this.parent = parent;
    }

    /** Define a symbol in the current scope. Returns false if already defined here. */
    define(entry: SymbolEntry): boolean {
        if (this.symbols.has(entry.name)) {
            return false; // duplicate in same scope
        }
        this.symbols.set(entry.name, entry);
        return true;
    }

    /** Look up a symbol by name, walking up the scope chain. */
    resolve(name: string): SymbolEntry | undefined {
        if (this.symbols.has(name)) {
            return this.symbols.get(name);
        }
        if (this.parent) {
            return this.parent.resolve(name);
        }
        return undefined;
    }

    /** Check if a symbol exists in the current scope only (no parent walk). */
    hasLocal(name: string): boolean {
        return this.symbols.has(name);
    }
}

// ─── Symbol Table ────────────────────────────────────────────────
export class SymbolTable {
    private currentScope: Scope;
    private globalScope: Scope;

    constructor() {
        this.globalScope = new Scope(null);
        this.currentScope = this.globalScope;
    }

    // ── Scope Management ────────────────────────────────────────

    /** Push a new child scope (entering a function body, loop, if-block, etc.) */
    enterScope(): void {
        this.currentScope = new Scope(this.currentScope);
    }

    /** Pop back to the parent scope. */
    exitScope(): void {
        if (this.currentScope.parent) {
            this.currentScope = this.currentScope.parent;
        }
    }

    // ── Symbol Operations ───────────────────────────────────────

    /**
     * Define a new symbol in the current scope.
     * @returns `true` if successful, `false` if the name is already declared in this scope.
     */
    define(entry: SymbolEntry): boolean {
        return this.currentScope.define(entry);
    }

    /**
     * Resolve a symbol by name, searching current scope then all enclosing scopes.
     * @returns The SymbolEntry if found, or `undefined`.
     */
    resolve(name: string): SymbolEntry | undefined {
        return this.currentScope.resolve(name);
    }

    /**
     * Check whether a name is already declared in the *current* (local) scope.
     */
    hasLocal(name: string): boolean {
        return this.currentScope.hasLocal(name);
    }

    /**
     * Convenience: define a variable symbol.
     */
    defineVariable(name: string, type: ChordScriptType, line: number, column: number): boolean {
        return this.define({
            name,
            kind: 'variable',
            type,
            line,
            column,
        });
    }

    /**
     * Convenience: define a function symbol.
     */
    defineFunction(
        name: string,
        paramNames: string[],
        paramTypes: ChordScriptType[],
        line: number,
        column: number,
    ): boolean {
        return this.define({
            name,
            kind: 'function',
            type: 'function',
            line,
            column,
            paramNames,
            paramTypes,
        });
    }

    /**
     * Convenience: define a class symbol with optional parent and members.
     */
    defineClass(
        name: string,
        parentClass: string | undefined,
        members: Map<string, SymbolEntry>,
        line: number,
        column: number,
    ): boolean {
        return this.define({
            name,
            kind: 'class',
            type: name, // class type is its own name
            line,
            column,
            parentClass,
            members,
        });
    }

    // ── Debugging ───────────────────────────────────────────────

    /** Return a snapshot of all symbols visible from the current scope (for debugging). */
    dump(): SymbolEntry[] {
        const result: SymbolEntry[] = [];
        let scope: Scope | null = this.currentScope;
        while (scope) {
            for (const [, entry] of scope.symbols) {
                result.push(entry);
            }
            scope = scope.parent;
        }
        return result;
    }
}
