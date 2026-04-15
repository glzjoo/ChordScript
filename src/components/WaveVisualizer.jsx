/**
 * @param {{ isPlaying: boolean }} props
 */
function WaveVisualizer({ isPlaying }) {
  if (!isPlaying) return null;

  return (
    <div className="wave-container">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="wave-bar" />
      ))}
    </div>
  );
}

export default WaveVisualizer;
