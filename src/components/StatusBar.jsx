import WaveVisualizer from './WaveVisualizer';

const STATUS_LABEL = {
  ready: 'Ready',
  compiling: 'Compiling…',
  playing: 'Playing',
  error: 'Error',
};

/**
 * IDE-style status bar along the bottom edge.
 * @param {{ status: string, cursor: { line: number, col: number }, lineCount: number }} props
 */
function StatusBar({ status, cursor, lineCount }) {
  return (
    <footer className="statusbar">
      <div className="statusbar-group">
        <span className="status-indicator" data-status={status} role="status">
          <span className="status-dot" />
          {STATUS_LABEL[status] ?? 'Ready'}
        </span>
        <WaveVisualizer isPlaying={status === 'playing'} />
      </div>

      <div className="statusbar-group">
        <span className="statusbar-mono">Ln {cursor.line}, Col {cursor.col}</span>
        <span className="statusbar-mono hide-mobile">{lineCount} lines</span>
        <span className="hide-mobile">Spaces: 2</span>
        <span className="hide-mobile">ChordScript</span>
      </div>
    </footer>
  );
}

export default StatusBar;
