/**
 * Tiny level meter shown in the status bar while audio is playing.
 * @param {{ isPlaying: boolean }} props
 */
function WaveVisualizer({ isPlaying }) {
  if (!isPlaying) return null;

  return (
    <span className="meter" aria-hidden="true">
      {[...Array(4)].map((_, i) => (
        <span key={i} />
      ))}
    </span>
  );
}

export default WaveVisualizer;
