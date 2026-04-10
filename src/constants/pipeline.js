/**
 * Compiler pipeline step definitions.
 * These represent the stages of the ChordScript interpreter:
 *   Lexer → Parser → Type Check → Execute → Audio Out
 */
const PIPELINE_STEPS = [
  { id: 'lexer',     label: 'Lexer',      icon: '⟨⟩' },
  { id: 'parser',    label: 'Parser',     icon: '🌳' },
  { id: 'typecheck', label: 'Type Check', icon: '✓'  },
  { id: 'execute',   label: 'Execute',    icon: '▶'  },
  { id: 'audio',     label: 'Audio Out',  icon: '♪'  },
];

export default PIPELINE_STEPS;
