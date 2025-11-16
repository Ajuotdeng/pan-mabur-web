/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        serif: ['"Merriweather"', "Georgia", "serif"],
        sans: ['"Inter"', "Arial", "sans-serif"], //optional fallback
      },
      colors: {
        beige: "#e8e5dc",
        darktext: "#2b2b2b",
      },
    },
  },

  plugins: [],
};
