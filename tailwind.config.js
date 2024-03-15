/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: "#116FEB"
      },
      width: {
        '900': '900px',
      },
    },
  },
  plugins: [],
};
