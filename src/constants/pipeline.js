/**
 * Compiler pipeline step definitions.
 * These represent the stages of the ChordScript interpreter:
 *   Lexer → Parser → Type Check → Execute → Audio Out
 */
const PIPELINE_STEPS = [
  { id: 'lexer',     label: 'Lex'   },
  { id: 'parser',    label: 'Parse' },
  { id: 'typecheck', label: 'Check' },
  { id: 'execute',   label: 'Run'   },
  { id: 'audio',     label: 'Audio' },
];

export default PIPELINE_STEPS;
