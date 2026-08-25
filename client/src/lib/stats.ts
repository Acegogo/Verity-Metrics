/*
 * The organisation's headline figures, confirmed by the Director in August 2026.
 *
 * These live in one place because the homepage and the projects page previously
 * carried different numbers (50+/5+/10000+/100% against 26/2/43/3+), which is
 * exactly the kind of contradiction a visitor notices. Import from here rather
 * than restating them in a page.
 */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const HEADLINE_STATS: Stat[] = [
  { value: 26, suffix: "", label: "Projects Completed" },
  { value: 2, suffix: "", label: "Countries Served" },
  { value: 43, suffix: "", label: "Partners & Clients" },
  { value: 3, suffix: "+", label: "Years Experience" },
];
