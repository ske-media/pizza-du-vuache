/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#314e36',
          light: '#4a7452',
          dark: '#233827',
        },
        secondary: {
          DEFAULT: '#e6d5c1',
          light: '#f4ebe0',
          dark: '#c4b4a1',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};