/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: 'rgb(18, 18, 18)',
          200: 'rgb(51, 51, 51)'
        },
        fredcode: {
          100: '#986DFF',
          200: '#6934E8',
          300: '#F6F6F9'
        }
      }
    },
  },
  plugins: [],
}

