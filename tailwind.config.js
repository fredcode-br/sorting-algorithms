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
          200: 'rgb(51, 51, 51)',
          300: 'rgb(82, 81, 81)'
        },
        ligth: {
          100: '#F6F6F9',
          200: '#d5c5fc'
        }
      },
      gridTemplateColumns: {
        default: '300px auto',
      },
      gridTemplateRows: {
        'default': '12vh 88vh',
        'phone': '40vh 60vh',
      },
      gridTemplateAreas: {
        'default': [
          'aside header',
          'aside content',
        ],
        'phone': [
          'aside',
          'content',
        ],
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}

