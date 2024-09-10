const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        black: colors.black
      }
    },
  },
  plugins: [],
}