interface CoreCompetencyProps {
  label: string;
  percentage: number;
}

export default function CoreCompetency({
  label = "Skill",
  percentage = 0,
}: CoreCompetencyProps) {
  return (
    <div className="flex flex-col items-center gap-4 laptop:gap-2">
      <div className="relative w-16 h-16 laptop:w-10 laptop:h-10">
        <div className="absolute inset-0 flex items-center justify-center text-lg laptop:text-xs font-bold text-white">
          {percentage}%
        </div>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#1F1F1F"
            strokeWidth="4"
            fill="transparent"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="url(#progressGradient)"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={`${2 * Math.PI * 28 * (percentage / 100)} ${2 * Math.PI * 28}`}
            className="drop-shadow-[0_0_10px_rgba(171,28,222,0.7)]"
          />
          <defs>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#7A19D3" />
              <stop offset="50%" stopColor="#F1810B" />
              <stop offset="100%" stopColor="#FF00B9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-sm md:text-base lg:text-lg laptop:text-[10px] font-medium text-white italic">
        {label}
      </span>
    </div>
  );
}
