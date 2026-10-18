import { useRef, useMemo, useCallback, useLayoutEffect } from 'react';
import { highlight } from './highlight';

/**
 * Code editor with line numbers, current-line highlight and syntax colouring.
 *
 * Uses the "transparent textarea over highlighted <pre>" technique so we keep
 * native editing behaviour (undo, IME, selection) without an editor library.
 *
 * @param {{
 *   code: string,
 *   onCodeChange: (code: string) => void,
 *   cursor: { line: number, col: number },
 *   onCursorChange: (cursor: { line: number, col: number }) => void
 * }} props
 */
function EditorPanel({ code, onCodeChange, cursor, onCursorChange }) {
  const inputRef = useRef(null);
  const highlightRef = useRef(null);
  const gutterRef = useRef(null);

  const lineCount = useMemo(() => code.split('\n').length, [code]);
  const highlighted = useMemo(() => highlight(code), [code]);

  /** Keep the highlight layer + gutter aligned with the textarea scroll. */
  const syncScroll = useCallback(() => {
    const ta = inputRef.current;
    if (!ta) return;
    if (highlightRef.current) {
      highlightRef.current.scrollTop = ta.scrollTop;
      highlightRef.current.scrollLeft = ta.scrollLeft;
    }
    if (gutterRef.current) {
      gutterRef.current.style.transform = `translateY(${-ta.scrollTop}px)`;
    }
  }, []);

  useLayoutEffect(syncScroll, [code, syncScroll]);

  const reportCursor = () => {
    const ta = inputRef.current;
    if (!ta) return;
    const before = ta.value.slice(0, ta.selectionStart);
    const line = before.split('\n').length;
    const col = before.length - before.lastIndexOf('\n');
    if (line !== cursor.line || col !== cursor.col) onCursorChange({ line, col });
  };

  const handleKeyDown = (e) => {
    // Insert two spaces on Tab instead of moving focus
    if (e.key === 'Tab' && !e.shiftKey && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      const ta = e.currentTarget;
      // execCommand keeps the native undo stack intact
      if (!document.execCommand?.('insertText', false, '  ')) {
        const { selectionStart: s, selectionEnd: end, value } = ta;
        onCodeChange(value.slice(0, s) + '  ' + value.slice(end));
        requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = s + 2; });
      }
    }
  };

  return (
    <div className="editor">
      {/* Line numbers */}
      <div className="editor-gutter" aria-hidden="true">
        <div ref={gutterRef}>
          {Array.from({ length: lineCount }, (_, i) => (
            <div
              key={i}
              className={`editor-gutter-line ${cursor.line === i + 1 ? 'is-active' : ''}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="editor-surface">
        {/* Highlight layer */}
        <pre ref={highlightRef} className="editor-highlight" aria-hidden="true">
          <span
            className="editor-line-band"
            style={{ top: `calc(14px + var(--editor-line-h) * ${cursor.line - 1})` }}
          />
          <code style={{ position: 'relative' }}>
            {highlighted}
            {'\n'}
          </code>
        </pre>

        {/* Native input layer */}
        <textarea
          ref={inputRef}
          value={code}
          onChange={(e) => { onCodeChange(e.target.value); reportCursor(); }}
          onScroll={syncScroll}
          onKeyDown={handleKeyDown}
          onKeyUp={reportCursor}
          onClick={reportCursor}
          onSelect={reportCursor}
          className="editor-input"
          spellCheck="false"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          wrap="off"
          placeholder="// Write your ChordScript here..."
          aria-label="ChordScript source"
          id="code-editor"
        />
      </div>
    </div>
  );
}

export default EditorPanel;
