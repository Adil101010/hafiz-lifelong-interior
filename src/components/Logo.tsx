interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <div
      className={`flex shrink-0 flex-col justify-center ${
        compact ? "leading-none" : ""
      }`}
    >
      <div
        className={`font-display font-black tracking-[-0.04em] ${
          compact
            ? "text-[18px] sm:text-[20px]"
            : "text-[26px] sm:text-[30px]"
        }`}
      >
        <span className="text-white">HAFIZ </span>
        <span className="text-lime">LIFELONG</span>
      </div>

      <div
        className={`mt-1 font-bold uppercase tracking-[0.24em] text-white/65 ${
          compact ? "text-[6px] sm:text-[7px]" : "text-[8px] sm:text-[9px]"
        }`}
      >
        Interior <span className="text-lime">•</span> Furniture{" "}
        <span className="text-lime">•</span> Sports
      </div>
    </div>
  );
}