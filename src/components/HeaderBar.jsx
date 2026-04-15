import { MusicIcon } from './Icons';
import PipelineDisplay from './PipelineDisplay';
import WaveVisualizer from './WaveVisualizer';

/**
 * @param {{ status: string, pipelineStep: string|null, pipelineError: string|null, sidebarOpen: boolean, onToggleSidebar: () => void }} props
 */
function HeaderBar({ status, pipelineStep, pipelineError, sidebarOpen, onToggleSidebar }) {

  const getStatusLabel = () => {
    switch (status) {
      case 'compiling': return 'COMPILING';
      case 'playing': return 'PLAYING';
      case 'error': return 'ERROR';
      default: return 'READY';
    }
  };

  const statusClass =
    status === 'compiling' ? 'compiling' :
      status === 'playing' ? 'playing' :
        status === 'error' ? 'error' : 'ready';

  const dotColor =
    status === 'error' ? 'bg-[var(--color-rose)]' :
      status === 'playing' ? 'bg-[var(--color-cyan)]' :
        status === 'compiling' ? 'bg-[var(--color-amber)]' : 'bg-[var(--color-accent)]';

  return (
    <header
      className="flex items-center justify-between px-3 sm:px-6 py-3 border-b border-white/[0.06] glass-strong animate-fade-in"
      style={{ minHeight: '56px' }}
    >
      {/* Left: Hamburger + Logo + Pipeline */}
      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        {/* Mobile hamburger */}
        <button
          onClick={onToggleSidebar}
          className="sidebar-toggle-btn md:hidden flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.1] bg-white/[0.03] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/[0.07] transition-all"
          aria-label="Toggle sidebar"
          id="sidebar-toggle"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {sidebarOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-purple)] flex items-center justify-center shadow-lg flex-shrink-0">
            <MusicIcon />
          </div>
          <div className="hidden xs:block">
            <h1 className="text-base font-bold tracking-tight text-[var(--color-text-primary)] leading-none">
              ChordScript
            </h1>
            <p className="text-[10px] font-medium text-[var(--color-text-muted)] tracking-widest uppercase mt-0.5">
              Musical DSL IDE
            </p>
          </div>
        </div>

        <div className="h-6 w-px bg-white/[0.08] mx-1 hidden md:block" />

        {/* Pipeline — hidden on small screens */}
        <div className="hidden md:block">
          <PipelineDisplay activeStep={pipelineStep} errorStep={pipelineError} />
        </div>
      </div>

      {/* Right: Visualizer + Status Badge */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <WaveVisualizer isPlaying={status === 'playing'} />
        <span className={`status-badge status-${statusClass}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
          {getStatusLabel()}
        </span>
      </div>
    </header>
  );
}

export default HeaderBar;
