interface Percentage {
  percentage: number;
}

export function ProgressBar({ percentage }: Percentage) {
  return (
    <article className="flex flex-col items-start justify-center gap-1">
      <label htmlFor="file">{percentage}%</label>
      <progress
        id="file"
        value={percentage}
        max="100"
        className="bg-gradient-to-b from-[#0B979A] to-[#955BF1] w-28 h-4 rounded-lg"
      >
        {percentage}
      </progress>
    </article>
  );
}
