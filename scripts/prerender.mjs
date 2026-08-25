/*
 * Prerender each route to static HTML.
 *
 * The site is a client-rendered SPA, so the HTML served to crawlers and
 * link-preview bots contained no headings and no copy at all - the audit's
 * finding F9. This step renders every route at build time and writes a real
 * HTML file for it, with per-route title, description, canonical and social
 * tags baked in. React then hydrates on top, so behaviour is unchanged.
 *
 * Run after `vite build` and `vite build --ssr`.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(root, "dist/public");
const templatePath = resolve(outDir, "index.html");
const serverEntry = resolve(root, "dist/server/entry-server.js");

if (!existsSync(templatePath)) {
  console.error("prerender: dist/public/index.html missing - run the client build first");
  process.exit(1);
}
if (!existsSync(serverEntry)) {
  console.error("prerender: dist/server/entry-server.js missing - run the ssr build first");
  process.exit(1);
}

const { render, ROUTES, SITE_URL } = await import(pathToFileURL(serverEntry).href);

const template = readFileSync(templatePath, "utf8");

/* Replace the content of a tag matched by a regex, escaping the value. */
const escapeAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function applyMeta(html, meta, url) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${escapeAttr(meta.description)}$2`,
    )
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${escapeAttr(url)}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${escapeAttr(url)}$2`)
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${escapeAttr(meta.title)}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${escapeAttr(meta.description)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${escapeAttr(meta.title)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${escapeAttr(meta.description)}$2`,
    );
}

const routes = ROUTES ?? [];
if (routes.length === 0) {
  console.error("prerender: no routes found");
  process.exit(1);
}

let written = 0;
for (const meta of routes) {
  const url = `${SITE_URL}${meta.path}`;
  let appHtml;
  try {
    appHtml = render(meta.path);
  } catch (err) {
    console.error(`prerender: failed to render ${meta.path}\n`, err);
    process.exit(1);
  }

  let html = applyMeta(template, meta, url);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const filePath =
    meta.path === "/"
      ? resolve(outDir, "index.html")
      : resolve(outDir, `.${meta.path}/index.html`);

  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html, "utf8");

  const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
  console.log(`  ${meta.path.padEnd(18)} ${String(kb).padStart(7)} KB`);
  written += 1;
}

/* sitemap.xml + robots.txt, so crawlers can find every route */
const today = new Date().toISOString().slice(0, 10);
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <priority>${r.path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
    )
    .join("\n") +
  `\n</urlset>\n`;
writeFileSync(resolve(outDir, "sitemap.xml"), sitemap, "utf8");

writeFileSync(
  resolve(outDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  "utf8",
);

console.log(`\nprerendered ${written} routes, plus sitemap.xml and robots.txt`);
