const colors = require('tailwindcss/colors')

module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
  
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        graywarm: colors.warmGray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
