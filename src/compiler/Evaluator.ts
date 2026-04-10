import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ChordScriptLexer } from '../generated/ChordScriptLexer';
import { ChordScriptParser } from '../generated/ChordScriptParser';
import { ChordScriptASTVisitor } from './ASTVisitor';

export function runChordScript(sourceCode: string) {
    try {
        // 1. Lexer
        const inputStream = CharStreams.fromString(sourceCode);
        const lexer = new ChordScriptLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);

        // 2. Parser
        const parser = new ChordScriptParser(tokenStream);
        const tree = parser.program();

        // 3. Interpreter
        const visitor = new ChordScriptASTVisitor();
        visitor.visit(tree);

        return "Execution Complete";

    } catch (error) {
        console.error("Compilation Error:", error);
        if (error instanceof Error) {
            return `Error: ${error.message}`;
        }

        return "An unknown error occurred during compilation.";
    }
}