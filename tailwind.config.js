const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./colors");

module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        galleryHeight: "19rem",
        galleryWidth: "31rem",
      },
    },
    colors,
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
