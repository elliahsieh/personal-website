/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        serif: ["Fraunces", "serif"],
      },
      colors: {
        midnight: "#191970",
        lavender: "#E6E6FA",
        champagne: "#F7E7CE",
        blush: "#F4C2C2",
      },
    },
  },
  plugins: [],
};
