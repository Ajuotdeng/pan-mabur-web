/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        serif: ['"Merriweather"', "Georgia", "serif"],
        sans: ['"Inter"', "Arial", "sans-serif"],
      },

      colors: {
        // existing
        beige: "#e8e5dc",
        darktext: "#2b2b2b",

        // NEW: earth palette
        earth: {
          100: "#f3f2ee",
          200: "#e5e2d8",
          400: "#b6b09c",
          600: "#6f6a5a",
          900: "#2b2b2b",
        },

        // heritage palette
        heritage: {
          50: "#eef6ff",
          300: "#93c5fd",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
        },
      },
    },
  },

  plugins: [],
};
