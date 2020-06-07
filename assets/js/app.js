// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.css";

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html";

// Listener to automatically detect dark mode. Required for
// tailwindcss-dark-mode.
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const handler = () => {
  if (mediaQuery.matches) {
    document.documentElement.classList.add("mode-dark");
  } else {
    document.documentElement.classList.remove("mode-dark");
  }
};
mediaQuery.addListener(handler);
handler();
