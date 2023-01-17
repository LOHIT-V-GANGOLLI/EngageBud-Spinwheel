/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': {'max':'749px'},
        'tablet': {'min':'750px', 'max': '1200px'},
        'desktop': '1201px',
        'cust': {'max':'985px'},
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}