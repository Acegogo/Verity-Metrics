interface LogoMarqueeProps {
  items: string[];
  /** Seconds for one full pass. Longer reads calmer. */
  durationSec?: number;
}

/**
 * Continuous horizontal scroll of partner names.
 *
 * The list is rendered twice and translated by exactly -50%, which is what
 * makes the loop seamless. It pauses on hover so a name can actually be read,
 * and holds still entirely under reduced-motion.
 */
export default function LogoMarquee({ items, durationSec = 38 }: LogoMarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center gap-4 marquee-track"
        style={{ animationDuration: `${durationSec}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="shrink-0 rounded-full border border-sky-100 bg-white px-6 py-3 font-heading text-sm font-semibold text-sky-800 shadow-sm transition-colors hover:border-brand-periwinkle hover:text-brand-indigo"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
