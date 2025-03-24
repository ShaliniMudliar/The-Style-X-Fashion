/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // This will scan all HTML files in the current directory
    "./**/*.html", // This will scan all HTML files in subdirectories
    "./styles/**/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

