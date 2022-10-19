/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html", "/script.js"],
  theme: {
    extend: {
      colors: {
        'dark-wood' : '#4c4037'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}
