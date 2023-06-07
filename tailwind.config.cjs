/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      fontFamily:{
        MontserratAlt: 'Montserrat Alternates, sans-serif'
      },

      colors: {
        'darkblue': '#11324D',
        'pastellblue': '#6B7AA1',
        'pastellgreen': '#C1CFC0',
        'sage': '#99A98F',
        'beige': '#E7E0C9'
      },
    },
  },
  plugins: [],
}
