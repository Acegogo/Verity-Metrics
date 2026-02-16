import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  overlay?: "dark" | "blue";
}

export default function PageHero({ title, subtitle, image, overlay = "dark" }: PageHeroProps) {
  const overlayClass =
    overlay === "blue"
      ? "bg-gradient-to-r from-sky-900/80 via-sky-800/70 to-sky-700/60"
      : "bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-700/40";

  return (
    <section className="relative h-[50vh] min-h-[380px] flex items-center overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="container relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-sky-100 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
