/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      sans: ['Vazirmatn', 'sans-serif']},
      colors: {
        primary: {
          DEFAULT: '#064e3b', // سبز تیره
          light: '#065f46',
          dark: '#022c22',
        },
        accent: {
          DEFAULT: '#f59e0b', // طلایی
          light: '#fbbf24',
          dark: '#d97706',
        }
      }
    },
  },
  plugins: [require('tailwindcss-rtl'),],
}