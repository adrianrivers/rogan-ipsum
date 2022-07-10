/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
