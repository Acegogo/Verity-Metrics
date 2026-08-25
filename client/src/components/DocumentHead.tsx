import { useEffect } from "react";
import { useLocation } from "wouter";
import { metaForPath, SITE_URL } from "@/lib/seo";

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Keeps the document head in step with the route during in-app navigation.
 *
 * The prerender step already bakes correct metadata into each route's static
 * HTML, which is what crawlers read. This handles the case where a visitor
 * moves between pages without a reload, so the tab title and any share made
 * from that moment reflect the page actually being viewed.
 */
export default function DocumentHead() {
  const [location] = useLocation();

  useEffect(() => {
    const meta = metaForPath(location);
    const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
  }, [location]);

  return null;
}
