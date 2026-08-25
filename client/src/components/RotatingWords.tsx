import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RotatingWordsProps {
  words: string[];
  intervalMs?: number;
  className?: string;
}

/**
 * Sibling to the hero Typewriter. Where that types character by character,
 * this rolls one word up and the next in from below.
 *
 * Same idea, different expression: using the typewriter on every page would
 * read as a tic rather than a signature.
 */
export default function RotatingWords({
  words,
  intervalMs = 2600,
  className = "",
}: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      return;
    }
    const timer = window.setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [words.length, intervalMs]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  if (still) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={`relative inline-grid overflow-hidden align-bottom ${className}`}>
      {/* Sizer keeps the line from reflowing as words swap */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {longest}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 whitespace-nowrap"
          aria-live="polite"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
