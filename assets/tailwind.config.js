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
      listStyleType: {
        circle: "circle",
      },
    },
  },
  variants: {
    display: ["responsive", "empty"],
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
  plugins: [
    require("tailwindcss-dark-mode")(),
    require("@tailwindcss/custom-forms"),
    plugin(function ({ addVariant, e }) {
      addVariant("empty", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`empty${separator}${className}`)}:empty`;
        });
      });
    }),
  ],
};
