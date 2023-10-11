/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.white,
        secondary: {
          100: "#8cb9ff",
          200: "#81b2ff",
          300: "#74aaff",
          400: "#66a2ff",
          500: "#5799ff",
          600: "#468fff",
          700: "#3384ff",
          800: "#1f78ff",
          900: "#0066ff",
        },
        accent: {
          700: "#17293c",
          800: "#111e2c",
          900: "#0b141d",
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
};
