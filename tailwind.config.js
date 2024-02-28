/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      margin: {
        "mt-15": "60px"
      },
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b"
      },
      screens: {
        "2xl": "1320px",
        xl: "1320px",
        sm: "450px",
      },
      fontFamily: {
    "roboto": ['Roboto Slab', 'serif']
      }
    },
  },
  plugins: [],
};
