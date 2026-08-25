import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroSlideshowProps {
  images: string[];
  intervalMs?: number;
}

/**
 * Rotating background for the homepage hero.
 *
 * Two details matter here, both of which were bugs in the earlier version:
 *
 *  1. A deep gradient is painted underneath the slides permanently, so a
 *     transition can never expose the white page behind them.
 *  2. AnimatePresence runs without `mode="wait"`, so the outgoing and incoming
 *     slides overlap. With `mode="wait"` the old slide finished fading out
 *     before the next began, which structurally guaranteed a white flash.
 */
export default function HeroSlideshow({ images, intervalMs = 5500 }: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return;
    const timer = window.setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [images.length, intervalMs, paused]);

  return (
    <>
      {/* Permanent base - never uncovered mid-transition */}
      <div className="absolute inset-0 bg-brand-deep" />

      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[current]}')` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.8, ease: "easeInOut" },
            scale: { duration: 7, ease: "linear" },
          }}
        />
      </AnimatePresence>

      {/* Scrim sits above the images and below the copy, so its opacity never
          dips while a crossfade is running. */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/90 via-sky-900/65 to-brand-indigo/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_65%,rgba(10,39,64,0.5),transparent_70%)]" />

      {/* Slide controls */}
      {images.length > 1 && (
        <div
          className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {images.map((image, i) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Show slide ${i + 1} of ${images.length}`}
              aria-current={i === current}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-gradient-to-r from-sky-300 to-brand-periwinkle"
                  : "w-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}
