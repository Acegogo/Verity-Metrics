import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { IMAGES } from "@/lib/images";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/projects", label: "Projects" },
  { href: "/verity-academy", label: "Verity Academy" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-sky-100/50"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center no-underline">
          <img
            src={IMAGES.logo}
            alt="Verity Metrics International"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                location === link.href
                  ? "bg-sky-50 text-sky-700 font-semibold"
                  : "text-slate-600 hover:text-sky-700 hover:bg-sky-50/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-sky-50"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-sky-100 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all no-underline ${
                    location === link.href
                      ? "bg-sky-50 text-sky-700 font-semibold"
                      : "text-slate-600 hover:bg-sky-50/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
