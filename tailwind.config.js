/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        'dark-wood' : '#4c4037',
        'light-wood': '#957f72',
        'body' : '#F9F1EC',
        'foot' : '#E5D9CF',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        second : ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
