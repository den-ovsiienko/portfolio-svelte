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
        'eukrainehead': ['e-Ukraine Head', 'sans-serif'],
      },
      backgroundImage: {
        'wave-yellow': 'url(/images/wave-yellow.svg)',
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
      }
    }
  },
  plugins: []
};