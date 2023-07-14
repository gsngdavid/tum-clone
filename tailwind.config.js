/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#3070b3",
        "blue-hover": "#14519A",
        "blue-secondary": "#0a2d57",
        "blue-dark": "#072140",
        "gray-light": "#E8ECEF",
      },
      fontFamily: {
        "roboto": "'Roboto', sans-serif;"
      }
    },
  },
  plugins: [],
}

