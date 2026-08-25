import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin reading-progress indicator pinned above the navbar, in the brand
 * azure-to-indigo run.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-sky-400 via-brand-violet to-brand-indigo"
      aria-hidden="true"
    />
  );
}
