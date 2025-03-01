export default function DecorativeLines() {
  return (
    <svg
      width="200"
      height="40"
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-90"
    >
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      {[
        { width: 160, opacity: 0.9 },
        { width: 140, opacity: 0.75 },
        { width: 120, opacity: 0.6 },
        { width: 100, opacity: 0.45 },
        { width: 80, opacity: 0.3 },
        { width: 60, opacity: 0.15 },
      ].map((line, i) => (
        <g key={i} filter="url(#glow)">
          <line
            x1={(200 - line.width) / 2}
            y1={8 + i * 6}
            x2={(200 + line.width) / 2}
            y2={8 + i * 6}
            stroke="url(#lineGradient)"
            strokeWidth={2}
            strokeLinecap="round"
            style={{ opacity: line.opacity }}
          />
        </g>
      ))}
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="transparent" />
          <stop offset="0.2" stopColor="#AB1CDE" />
          <stop offset="0.5" stopColor="#715DFC" />
          <stop offset="0.8" stopColor="#AB1CDE" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}
