import { motion } from "framer-motion";
import type { ElementType } from "react";

interface AnimatedHeadingProps {
  text: string;
  /** Words to render in the brand gradient, matched case-insensitively. */
  highlight?: string[];
  as?: ElementType;
  className?: string;
  delay?: number;
}

/**
 * Reveals a heading word by word as it scrolls into view, with chosen words
 * picked out in the brand gradient.
 *
 * Splitting on words rather than characters keeps it readable: a
 * character-by-character reveal on a long heading reads as decoration and
 * hurts anyone scanning the page.
 */
export default function AnimatedHeading({
  text,
  highlight = [],
  as: Tag = "h2",
  className = "",
  delay = 0,
}: AnimatedHeadingProps) {
  const words = text.split(" ");
  const lower = highlight.map((w) => w.toLowerCase().replace(/[^\w]/g, ""));

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => {
          const bare = word.toLowerCase().replace(/[^\w]/g, "");
          const isHighlighted = lower.includes(bare);
          return (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: "0.4em" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: delay + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${isHighlighted ? "text-brand-flow" : ""}`}
            >
              {word}
              {i < words.length - 1 && " "}
            </motion.span>
          );
        })}
      </span>
    </Tag>
  );
}
