/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#E6F8EC',
          100: '#CCF2DA',
          200: '#99E6B4',
          300: '#66D98F',
          400: '#33CD69',
          500: '#1CBD5D',
          600: '#18A94F',
          700: '#138641',
          800: '#0F6232',
          900: '#0A3D23',
        },
      },
    },
  },
  plugins: [],
}

