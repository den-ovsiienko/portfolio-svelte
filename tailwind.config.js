/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      yellow: '#FEE58F',
      purple: '#9198C4',
      'green-light': '#EBF1DE',
      'blue-light': '#DEEEF1',
      'purple-light': '#DEE0F1'
    },
    extend: {
      fontFamily: {
        'eukraine': ['e-Ukraine', 'sans-serif'],
        'eukrainehead': ['e-UkraineHead', 'sans-serif'],
      },
      backgroundImage: {
        'wave-yellow': 'url(/images/wave-yellow.svg)',
        'wave-purple': 'url(/images/wave-purple.svg)',
      },
      spacing: {
        '1/2': '50vh',
        '1/3': '33.333333vh',
        '1/4': '25vh',
        '1/5': '20vh',
        '1/6': '16.666667vh',
        '1/7': '14.285714vh',
        '1/8': '12.5vh',
        '1/9': '11.111111vh',
        '1/10': '10vh',
        'screen': '100vh',
      },
      animation: {
        shake: 'shake 2s ease-in-out infinite',
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '10%': {
            transform: 'rotate(15deg)',
          },
          '20%': {
            transform: 'rotate(0eg)',
          },
          '30%': {
            transform: 'rotate(-10deg)',
          },
          '40%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
    }
  },
  plugins: []
};