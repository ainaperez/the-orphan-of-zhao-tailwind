
module.exports = {
  content: [],
  theme: {
    screens: {
      'sm': {'max':'360px'},
      'md': {'max':'769px'},
      'lg': {'max':'1024px'},
      'xl': '1280px',
      '2xl': '1536px',
    },

    colors: {
      white: '#fff',
      black: '#231f20',
      yellow: '#f4bd63',
      red: '#b21b29'
    },
      
    fontFamily: {
      serif: ["Bebas Neue", 'cursive'],
      sans: ["Montserrat", 'sans-serif'],
    },
    extend: {
      height:{
        '6': '6vh',
        '50': '50vh',
        '91': '91.7vh', 
        '700': '700px'
      }, 
      zIndex: {
        '-1': '1',
        '-3': '-3',
        '-5': '-5',
        '-4': '-4',
      },
      padding: {
        '6': '6vh',
      },

      margin: {
        '6': '6vh',
        '20': '20%',
        '-25': '-25vw',
        '35': '35%',
        '60': '60%',
        '-10': '-10vh',
        '-35': '-35vh',
        '-50': '-50vh',
        '-68': '-68vh',
        '-90': '-90vh',
        '-200': '-200px',
        '300': '300px',
        '-320': '-320px',
        '-500': '-500px',
      },

      width: {
        '125': '125px',
        '300': '300px'
      },
      maxWidth: {
        '920': '920px',
      },
      rotate: {
        '-20': '-20deg',
        '20': '20deg'
      }, 
      
      inset: {
        '-50': '-50vh',
      }
    },
  },
  purge: ["./src/**/*.html"],
  plugins: [],
}
