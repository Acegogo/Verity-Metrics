import { useEffect, useState } from "react";

const TYPE_MS = 95;
const DELETE_MS = 45;
const HOLD_MS = 1900;
const RESTART_MS = 420;

interface TypewriterProps {
  words: string[];
  className?: string;
}

/**
 * Types each word out, holds it, deletes it and moves to the next.
 *
 * Driven by timers rather than requestAnimationFrame so it keeps running
 * reliably, and it reserves the width of the longest word so the surrounding
 * headline never reflows mid-animation. Readers who prefer reduced motion get
 * the first word, statically.
 */
export default function Typewriter({ words, className = "" }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setText(words[0] ?? "");
    }
  }, [words]);

  useEffect(() => {
    if (still || words.length === 0) return;

    const word = words[index];
    let delay: number;

    if (!deleting && text === word) delay = HOLD_MS;
    else if (deleting && text === "") delay = RESTART_MS;
    else delay = deleting ? DELETE_MS : TYPE_MS;

    const timer = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      } else {
        setText((prev) =>
          deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1),
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words, still]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className={`relative inline-block align-baseline ${className}`}>
      {/* Invisible sizer holds the line width steady */}
      <span aria-hidden="true" className="invisible italic">
        {longest}
      </span>
      <span className="absolute left-0 top-0 whitespace-nowrap" aria-live="polite">
        <span className="italic bg-gradient-to-r from-sky-300 via-sky-200 to-brand-periwinkle bg-clip-text text-transparent">
          {text}
        </span>
        {!still && (
          <span
            aria-hidden="true"
            className="ml-0.5 inline-block h-[0.78em] w-[3px] translate-y-[0.06em] rounded-sm bg-sky-300 animate-pulse"
          />
        )}
      </span>
    </span>
  );
}
