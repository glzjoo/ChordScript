import { useRef, useEffect } from 'react';
import { TerminalIcon, ClearIcon } from './Icons';
import PipelineDisplay from './PipelineDisplay';

/**
 * Classifies a terminal line by its leading glyph so it can be styled.
 * Returns the glyph separately so it renders in its own column.
 */
const parseLine = (line) => {
  if (line.startsWith('✓')) return { kind: 'is-success', glyph: '✓', text: line.slice(1).trimStart() };
  if (line.startsWith('✗')) return { kind: 'is-error',   glyph: '✗', text: line.slice(1).trimStart() };
  if (line.startsWith('▸')) return { kind: 'is-step',    glyph: '›', text: line.slice(1).trimStart() };
  if (line.startsWith('■')) return { kind: 'is-warn',    glyph: '■', text: line.slice(1).trimStart() };
  if (line.startsWith('  ')) return { kind: 'is-meta',   glyph: '',  text: line.trimStart() };
  return { kind: 'is-plain', glyph: '', text: line };
};

/**
 * Bottom output panel with compiler pipeline status.
 * @param {{ output: string, pipelineStep: string|null, pipelineError: string|null, onClear: () => void }} props
 */
function TerminalPanel({ output, pipelineStep, pipelineError, onClear }) {
  const outputRef = useRef(null);

  // Auto-scroll to latest output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <section className="panel" aria-label="Output">
      <div className="panel-header">
        <div className="panel-tabs" role="tablist">
          <div className="panel-tab" role="tab" aria-selected="true">
            <TerminalIcon />
            Output
          </div>
        </div>

        <div className="panel-actions">
          <PipelineDisplay activeStep={pipelineStep} errorStep={pipelineError} />
          <button
            className="icon-btn"
            onClick={onClear}
            disabled={!output}
            aria-label="Clear output"
            title="Clear output"
            id="clear-output"
            style={{ marginLeft: 12 }}
          >
            <ClearIcon />
          </button>
        </div>
      </div>

      <div ref={outputRef} className="panel-body" id="terminal-output" role="log" aria-live="polite">
        {output ? (
          output.split('\n').map((line, i) => {
            const { kind, glyph, text } = parseLine(line);
            return (
              <div key={i} className={`log-line ${kind}`}>
                <span className="log-glyph">{glyph}</span>
                <span>{text || '\u00a0'}</span>
              </div>
            );
          })
        ) : (
          <div className="panel-empty">
            Nothing here yet. Press <span className="kbd kbd-plain">Run</span> to compile and play your script.
          </div>
        )}
      </div>
    </section>
  );
}

export default TerminalPanel;
