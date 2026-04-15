import EXAMPLES from '../constants/examples';

/**
 * @param {{ onLoadSnippet: (snippet: object) => void, isOpen: boolean, onClose: () => void }} props
 */
function Sidebar({ onLoadSnippet, isOpen, onClose }) {
  return (
    <>
      {/* Backdrop overlay — mobile only */}
      <div
        className={`sidebar-backdrop md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <aside
        className={`sidebar-panel w-72 md:w-64 border-r border-white/[0.06] p-4 flex flex-col gap-4 overflow-y-auto glass animate-fade-in-delay-1
          fixed md:relative top-0 left-0 h-full z-40 md:z-auto
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{ flexShrink: 0 }}
      >
        {/* ─── Example Snippets ─────────────────────────── */}
        <div>
          <h2 className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-widest uppercase mb-3">
            Examples
          </h2>
          <div className="flex flex-col gap-2">
            {EXAMPLES.map((snippet, i) => (
              <button
                key={i}
                onClick={() => onLoadSnippet(snippet)}
                className="snippet-card text-left"
                id={`snippet-${i}`}
              >
                <div className="text-[13px] font-semibold text-[var(--color-text-primary)] mb-1">
                  {snippet.title}
                </div>
                <div className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                  {snippet.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ─── Quick Reference ──────────────────────────── */}
        <div className="mt-auto pt-4 border-t border-white/[0.06]">
          <h3 className="text-[11px] font-semibold text-[var(--color-text-muted)] tracking-widest uppercase mb-3">
            Quick Reference
          </h3>
          <div className="space-y-2 text-[11px] font-mono text-[var(--color-text-muted)]">
            <div>
              <span className="text-[var(--color-purple)] font-semibold">Notes</span>
              <span className="ml-2 text-[var(--color-text-secondary)]">C4 D4 E4 … B7</span>
            </div>
            <div>
              <span className="text-[var(--color-cyan)] font-semibold">Duration</span>
              <span className="ml-2 text-[var(--color-text-secondary)]">Whole Half Quarter Eighth</span>
            </div>
            <div>
              <span className="text-[var(--color-amber)] font-semibold">loop</span>
              <span className="ml-2 text-[var(--color-text-secondary)]">N times {'{ }'}</span>
            </div>
            <div>
              <span className="text-[var(--color-rose)] font-semibold">.play</span>
              <span className="ml-2 text-[var(--color-text-secondary)]">(Note, Duration)</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
