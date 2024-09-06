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


      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-2%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform:  'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation:  
 {
        'bounce': 'bounce 3s infinite',
      },


    },
  
    },
  plugins : [],
};

