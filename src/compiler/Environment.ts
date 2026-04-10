export class Environment {
    private values = new Map<string, any>();
    private enclosing: Environment | null;

    // If an enclosing environment is passed, this becomes a "child" scope
    constructor(enclosing: Environment | null = null) {
        this.enclosing = enclosing;
    }

    // Declares a new variable in the CURRENT scope (handles shadowing)
    define(name: string, value: any) {
        this.values.set(name, value);
    }

    // Looks up a variable. If not in current scope, checks the parent.
    get(name: string): any {
        if (this.values.has(name)) {
            return this.values.get(name);
        }
        if (this.enclosing !== null) {
            return this.enclosing.get(name);
        }
        throw new Error(`Interpreter Error: Undefined variable '${name}'.`);
    }
}