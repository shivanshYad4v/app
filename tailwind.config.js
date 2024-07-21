/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        "clr-light-pink":"hsl(275, 100%, 97%)",
      },
      fontFamily:{
        "sans": ["Work Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}