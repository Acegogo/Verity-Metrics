import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Wouter keeps the window scroll offset when the route changes, so navigating
 * from halfway down one page dropped you halfway down the next. Reset on every
 * navigation.
 *
 * The browser also restores scroll on reload, which fights this on the way
 * back in, so that is switched to manual.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // `instant` rather than the inherited smooth scroll: a page change should
    // start at the top, not animate there from wherever the reader was.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return null;
}
