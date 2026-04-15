import { useRef, useEffect } from 'react';
import { TerminalIcon } from './Icons';

/**
 * @param {{ output: string }} props
 */
function TerminalPanel({ output }) {
  const outputRef = useRef(null);

  // Auto-scroll to latest output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  /**
   * Determines the Tailwind color class for a terminal line
   * based on its leading character.
   */
  const getLineColor = (line) => {
    if (line.startsWith('✓')) return 'text-[var(--color-accent)]';
    if (line.startsWith('✗')) return 'text-[var(--color-rose)]';
    if (line.startsWith('▸')) return 'text-[var(--color-text-muted)]';
    if (line.startsWith('■')) return 'text-[var(--color-amber)]';
    return 'text-[var(--color-text-secondary)]';
  };

  return (
    <div className="terminal-wrapper border-t border-white/[0.06]" style={{ flexShrink: 0 }}>
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-3 sm:px-5 py-2 border-b border-white/[0.06]">
        <TerminalIcon />
        <span className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-widest uppercase">
          Output
        </span>
      </div>

      {/* Terminal Body */}
      <div
        ref={outputRef}
        className="terminal-output p-3 sm:p-4 overflow-y-auto"
        style={{ height: 'calc(100% - 36px)', border: 'none', borderRadius: 0 }}
        id="terminal-output"
      >
        {output ? (
          <pre className="whitespace-pre-wrap text-[12px] sm:text-[13px]">
            {output.split('\n').map((line, i) => (
              <div key={i} className={getLineColor(line)}>
                {line}
              </div>
            ))}
          </pre>
        ) : (
          <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-[12px]">
            <span className="opacity-60">$</span>
            <span>
              Ready. Press{' '}
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono mx-0.5">
                Compile & Play
              </kbd>{' '}
              to run your script.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TerminalPanel;
