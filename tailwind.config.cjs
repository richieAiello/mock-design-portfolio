/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        blue: '#755cde',
        orange: '#f6a560',
        pink: '#f39e9e',
        peach: '#eb7565',
        green: '#61c4b7',
        purple: '#552049',
        black: '#030303',
        grey: '#7a746e',
        cream: '#fff7f0',
      },
    },
  },
  plugins: [],
};
