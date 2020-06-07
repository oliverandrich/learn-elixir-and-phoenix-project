const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [
    "../**/*.html.eex",
    "../**/*.html.leex",
    "../**/views/**/*.ex",
    "../**/live/**/*.ex",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      listStyleType: {
        circle: "circle",
      },
    },
  },
  variants: {
    display: ["responsive", "empty"],
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("empty", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`empty${separator}${className}`)}:empty`;
        });
      });
    }),
  ],
};
