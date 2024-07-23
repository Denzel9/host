/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: ['./build/**/*.{html,js}', './src/**/*.{html,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('../src/assets/bg.jpg')",
      }
    },
    colors: {
      dark: '#101010',
      grey: '#171717',
      reds: '#240E0D',
      blues: '#171C28',
      black: colors.black,
      white: '#ffffff',
      lightGrey: '#858585',
      ...colors
    }
  },
  plugins: [],
}
