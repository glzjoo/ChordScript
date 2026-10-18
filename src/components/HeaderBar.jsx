import { LogoMark, MenuIcon, CloseIcon, PlayIcon, StopIcon } from './Icons';

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

/**
 * Top application bar: brand, current file, and run controls.
 *
 * @param {{
 *   status: string,
 *   fileName: string,
 *   isDirty: boolean,
 *   sidebarOpen: boolean,
 *   onToggleSidebar: () => void,
 *   onRun: () => void,
 *   onStop: () => void
 * }} props
 */
function HeaderBar({ status, fileName, isDirty, sidebarOpen, onToggleSidebar, onRun, onStop }) {
  const isCompiling = status === 'compiling';
  const isPlaying = status === 'playing';

  return (
    <header className="header">
      <div className="header-left">
        {/* Mobile drawer toggle */}
        <button
          onClick={onToggleSidebar}
          className="icon-btn only-mobile"
          aria-label={sidebarOpen ? 'Close examples' : 'Open examples'}
          aria-expanded={sidebarOpen}
          id="sidebar-toggle"
        >
          {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className="brand">
          <LogoMark className="brand-mark" />
          <h1 className="brand-name">ChordScript</h1>
          <span className="brand-tag hide-mobile">DSL</span>
        </div>

        <span className="crumb-sep hide-mobile">/</span>

        <div className="crumb-file hide-mobile" title={fileName}>
          {fileName}
          {isDirty && <span className="dirty-dot" title="Modified" />}
        </div>
      </div>

      <div className="header-right">
        {isPlaying && (
          <button onClick={onStop} className="btn btn-ghost" id="stop-btn">
            <StopIcon />
            <span className="hide-mobile">Stop</span>
          </button>
        )}
        <button
          onClick={onRun}
          disabled={isCompiling}
          className="btn btn-primary"
          id="compile-btn"
          title={`Compile & play (${isMac ? '⌘' : 'Ctrl'}+Enter)`}
        >
          {isCompiling ? <span className="spinner" /> : <PlayIcon />}
          <span>{isCompiling ? 'Compiling' : 'Run'}</span>
          <span className="kbd hide-mobile">{isMac ? '⌘' : 'Ctrl'} ↵</span>
        </button>
      </div>
    </header>
  );
}

export default HeaderBar;
