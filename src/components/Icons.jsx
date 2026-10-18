/**
 * Reusable SVG icon components used across the ChordScript IDE.
 * Icons inherit `currentColor` and share a consistent 1.75 stroke weight.
 */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 4.5v15a1 1 0 0 0 1.52.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5z" />
  </svg>
);

export const StopIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="5" y="5" width="14" height="14" rx="2" />
  </svg>
);

export const TerminalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <polyline points="5 16 10 11 5 6" />
    <line x1="12" y1="18" x2="19" y2="18" />
  </svg>
);

export const ClearIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <line x1="6" y1="18" x2="18" y2="6" />
  </svg>
);

export const MenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="16" x2="20" y2="16" />
  </svg>
);

export const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

/** ChordScript brand mark — a stacked chord on a stem. */
export const LogoMark = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect width="32" height="32" rx="7" fill="var(--accent)" />
    <circle cx="12" cy="22" r="3.2" fill="var(--accent-ink)" />
    <circle cx="12" cy="15" r="3.2" fill="var(--accent-ink)" />
    <circle cx="12" cy="8.5" r="3.2" fill="var(--accent-ink)" opacity="0.45" />
    <rect x="14.4" y="6" width="2" height="16.5" rx="1" fill="var(--accent-ink)" />
    <path d="M16.4 6.5c2.6.6 5.6 2.4 5.6 6" stroke="var(--accent-ink)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
