const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./colors");

module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "Inter", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        galleryHeight: "30rem",
        galleryWidth: "31rem",
      },
      maxWidth: {},
    },
    colors,
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
