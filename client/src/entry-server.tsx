import { renderToString } from "react-dom/server";
import App from "./App";

export { ROUTES, SITE_URL } from "./lib/seo";

/**
 * Renders a route to an HTML string at build time.
 *
 * Only the prerender script imports this; the browser bundle never includes it.
 */
export function render(url: string): string {
  return renderToString(<App ssrPath={url} />);
}
