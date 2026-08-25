import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

/*
 * Build-tool scaffolding removed (audit F5):
 *
 *  - vitePluginManusRuntime()        inlined a ~358 KB development runtime into
 *                                    every page of the production HTML.
 *  - jsxLocPlugin()                  stamped source-location attributes onto
 *                                    every JSX element for a visual editor.
 *  - vitePluginManusDebugCollector() served a browser log collector.
 *
 * None of them are needed to run the site. The packages are left in
 * package.json so the lockfile stays intact; they are simply no longer applied.
 */

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: ["localhost", "127.0.0.1"],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
