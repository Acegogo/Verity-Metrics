import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLocation } from "wouter";

/**
 * Settles each page in as it mounts.
 *
 * Keyed on the route so it replays on every navigation. There is deliberately
 * no exit animation: holding the outgoing page while the next one loads makes
 * navigation feel slower, and it fights the scroll reset.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  return (
    <motion.div
      key={location}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
