/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'pale-green': '#f8fff0',
        'sage-green':'#87986a',
        'forest-green' :'#1E3F20',
        'light-green' :'#f8fff0',
      },

      screens:{
        'max-md': { 'max': '1024px' },
        'max-sm': {'max': '479px'},
      },
    },
  },
  plugins: [],
}

