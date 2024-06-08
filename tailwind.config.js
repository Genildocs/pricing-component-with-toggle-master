/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#a3a8f0',
        'dark-blue': '#696fdd',
      },
      boxShadow: {
        card: '0px 0px 19px 2px rgba(163,168,240,1)',
      },
    },
  },
  plugins: [],
};
