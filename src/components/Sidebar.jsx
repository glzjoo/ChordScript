import EXAMPLES from '../constants/examples';

/**
 * Left panel: example programs + a compact syntax reference.
 * Becomes an off-canvas drawer on small screens.
 *
 * @param {{
 *   activeIndex: number|null,
 *   onLoadSnippet: (snippet: object, index: number) => void,
 *   isOpen: boolean,
 *   onClose: () => void
 * }} props
 */
function Sidebar({ activeIndex, onLoadSnippet, isOpen, onClose }) {
  return (
    <>
      {/* Backdrop overlay — mobile only */}
      <div
        className={`sidebar-backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`sidebar ${isOpen ? 'is-open' : ''}`} aria-label="Examples and reference">
        {/* ─── Example Snippets ─────────────────────────── */}
        <div className="sidebar-scroll">
          <section className="sidebar-section">
            <h2 className="sidebar-heading">
              Examples
              <span className="count">{EXAMPLES.length}</span>
            </h2>
            <ul className="example-list">
              {EXAMPLES.map((snippet, i) => (
                <li key={i}>
                  <button
                    onClick={() => onLoadSnippet(snippet, i)}
                    className={`example-item ${activeIndex === i ? 'is-active' : ''}`}
                    aria-current={activeIndex === i ? 'true' : undefined}
                    id={`snippet-${i}`}
                  >
                    <span className="example-index">{String(i + 1).padStart(2, '0')}</span>
                    <span className="example-title">{snippet.title.replace(/\s+/g, ' ')}</span>
                    <span className="example-desc">{snippet.description}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ─── Quick Reference ──────────────────────────── */}
        <section className="sidebar-section">
          <h3 className="sidebar-heading">Reference</h3>
          <dl className="ref-list">
            <dt>note</dt>
            <dd><span className="tok-note">C4</span> <span className="tok-note">F#3</span> <span className="tok-note">Bb5</span></dd>
            <dt>duration</dt>
            <dd><span className="tok-duration">Whole Half Quarter Eighth</span></dd>
            <dt>loop</dt>
            <dd><span className="tok-keyword">loop</span> 4 <span className="tok-keyword">times</span> <span className="tok-punct">{'{ }'}</span></dd>
            <dt>play</dt>
            <dd>x.<span className="tok-fn">play</span><span className="tok-punct">(</span>note<span className="tok-punct">,</span> dur<span className="tok-punct">)</span></dd>
          </dl>
        </section>
      </aside>
    </>
  );
}

export default Sidebar;
