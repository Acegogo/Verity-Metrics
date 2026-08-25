interface SectionDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
  /** Draw the profile's twin accent ribbons over the transition. */
  accent?: boolean;
}

/**
 * The flowing-wave transition between sections, taken from the company
 * profile's cover artwork rather than the flat diagonal it replaces.
 */
export default function SectionDivider({
  from = "#EFF8FF",
  to = "#ffffff",
  flip = false,
  accent = true,
}: SectionDividerProps) {
  return (
    <div
      className={`relative h-16 md:h-24 ${flip ? "rotate-180" : ""}`}
      style={{ marginTop: "-1px", marginBottom: "-1px" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <rect width="1440" height="96" fill={from} />

        {/* Main wave carrying the next section's colour */}
        <path d="M0 34C240 74 420 4 720 30C1010 55 1200 92 1440 62V96H0V34Z" fill={to} />

        {accent && (
          <>
            {/* Azure ribbon */}
            <path
              d="M0 44C240 84 420 14 720 40C1010 65 1200 100 1440 70"
              stroke="#38B6FF"
              strokeOpacity="0.5"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Indigo ribbon, offset - the profile always pairs the two */}
            <path
              d="M0 56C250 94 430 26 730 52C1020 76 1210 108 1440 80"
              stroke="#1800AD"
              strokeOpacity="0.28"
              strokeWidth="2"
              fill="none"
            />
          </>
        )}
      </svg>
    </div>
  );
}
