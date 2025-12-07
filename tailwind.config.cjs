/********* Tailwind Config *********/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brandYellow: '#F6D78D',
        brandOrange: '#F09A32',
        brandRed: '#D63A2D',
        brandBrown: '#5A3B2E'
      },
      fontFamily: {
        logo: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
      },
      boxShadow: {
        button: '0 4px 0 0 rgba(0,0,0,0.5)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
