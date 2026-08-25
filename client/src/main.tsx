import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

/*
 * Routes are prerendered to static HTML at build time, so the container
 * normally arrives with markup already in it and React hydrates onto it.
 * createRoot is the fallback for anything served without prerendered content.
 */
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
