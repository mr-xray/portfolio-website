/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      ...colors,
      background: "#cbeaf5",
      foreground: "#212325",
      secondary: "#83CFCA",
      light: "#FFF7ED",
      medium: "#F2E7D1",
      white: "#FFFFFF",
      gray: "#F7F8F9",
    },
    fontSize: {
      "2xl": ["1.75rem", "2rem"],
      "3xl": ["2rem", "2.25rem"],
      "4xl": ["2.5rem", "2.75rem"],
    },
  },

  plugins: [],
};
