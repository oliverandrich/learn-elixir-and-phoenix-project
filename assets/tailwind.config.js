const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    mode: "all",
    content: [
      "../**/*.html.eex",
      "../**/*.html.leex",
      "../**/views/**/*.ex",
      "../**/live/**/*.ex",
      "./js/**/*.js",
    ],
    options: {
      whitelist: ["mode-dark"],
    },
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark-hover",
      "dark-focus",
    ],
    borderColor: [
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark-hover",
      "dark-focus",
    ],
    textColor: [
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark-hover",
      "dark-focus",
    ],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
