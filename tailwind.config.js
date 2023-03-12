/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        'water-blue': '#CFE2FF',
        'light-blue': '#5551FF',
        'blue-magenta': '#C7B9FF',
        yellow: '#FFC700',
        green: '#0FA958',
        'congo-pink': '#FF8577',
      },
    },
  },
  plugins: [],
}
