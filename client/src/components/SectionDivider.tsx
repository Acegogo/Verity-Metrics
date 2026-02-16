interface SectionDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

export default function SectionDivider({ from = "#f0f9ff", to = "#ffffff", flip = false }: SectionDividerProps) {
  return (
    <div className={`relative h-16 md:h-24 ${flip ? "rotate-180" : ""}`} style={{ marginTop: "-1px", marginBottom: "-1px" }}>
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <rect width="1440" height="96" fill={from} />
        <path d="M0 0L1440 96H0V0Z" fill={to} />
      </svg>
    </div>
  );
}
