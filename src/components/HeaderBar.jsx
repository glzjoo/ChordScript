import { MusicIcon } from './Icons';
import PipelineDisplay from './PipelineDisplay';
import WaveVisualizer from './WaveVisualizer';

/**
 * HeaderBar — Top navigation bar for the ChordScript IDE.
 * Contains branding, the compiler pipeline indicator, and a status badge.
 *
 * @param {{ status: string, pipelineStep: string|null, pipelineError: string|null }} props
 */
function HeaderBar({ status, pipelineStep, pipelineError }) {

  const getStatusLabel = () => {
    switch (status) {
      case 'compiling': return 'COMPILING';
      case 'playing':   return 'PLAYING';
      case 'error':     return 'ERROR';
      default:          return 'READY';
    }
  };

  const statusClass =
    status === 'compiling' ? 'compiling' :
    status === 'playing'   ? 'playing'   :
    status === 'error'     ? 'error'     : 'ready';

  const dotColor =
    status === 'error'     ? 'bg-[var(--color-rose)]'   :
    status === 'playing'   ? 'bg-[var(--color-cyan)]'   :
    status === 'compiling' ? 'bg-[var(--color-amber)]'  : 'bg-[var(--color-accent)]';

  return (
    <header
      className="flex items-center justify-between px-6 py-3 border-b border-white/[0.06] glass-strong animate-fade-in"
      style={{ minHeight: '56px' }}
    >
      {/* Left: Logo + Pipeline */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-purple)] flex items-center justify-center shadow-lg">
            <MusicIcon />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-[var(--color-text-primary)] leading-none">
              ChordScript
            </h1>
            <p className="text-[10px] font-medium text-[var(--color-text-muted)] tracking-widest uppercase mt-0.5">
              Musical DSL IDE
            </p>
          </div>
        </div>

        <div className="h-6 w-px bg-white/[0.08] mx-1" />

        {/* Pipeline */}
        <PipelineDisplay activeStep={pipelineStep} errorStep={pipelineError} />
      </div>

      {/* Right: Visualizer + Status Badge */}
      <div className="flex items-center gap-3">
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
