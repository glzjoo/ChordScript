import { useRef } from 'react';
import { PlayIcon, StopIcon, CodeIcon } from './Icons';

/**
 * @param {{
 *   code: string,
 *   onCodeChange: (code: string) => void,
 *   lineCount: number,
 *   status: string,
 *   onRun: () => void,
 *   onStop: () => void
 * }} props
 */
function EditorPanel({ code, onCodeChange, lineCount, status, onRun, onStop }) {
  const editorRef = useRef(null);

  return (
    <>
      {/* ─── Editor Toolbar ─────────────────────────── */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2 text-[12px] text-[var(--color-text-muted)]">
          <CodeIcon />
          <span className="font-medium">editor.chord</span>
          <span className="text-[var(--color-text-muted)] opacity-50 ml-2 hidden xs:inline">
            {lineCount} lines
          </span>
        </div>

        <div className="flex items-center gap-2">
          {status === 'playing' && (
            <button onClick={onStop} className="btn-secondary" id="stop-btn">
              <StopIcon />
              <span className="hidden sm:inline">Stop</span>
            </button>
          )}
          <button
            onClick={onRun}
            disabled={status === 'compiling'}
            className="btn-primary"
            id="compile-btn"
          >
            <PlayIcon />
            <span className="hidden sm:inline">
              {status === 'compiling' ? 'Compiling...' : 'Compile & Play'}
            </span>
          </button>
        </div>
      </div>

      {/* ─── Code Textarea ──────────────────────────── */}
      <div className="flex-1 p-2 sm:p-4 overflow-hidden" style={{ minHeight: 0 }}>
        <textarea
          ref={editorRef}
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          className="editor-textarea"
          spellCheck="false"
          placeholder="// Write your ChordScript here..."
          id="code-editor"
        />
      </div>
    </>
  );
}

export default EditorPanel;
