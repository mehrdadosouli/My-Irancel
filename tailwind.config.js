/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white':{
          100:'#fffff',
          200:'#f6f6f6',
          300:'#e7e7e7'
        }
      }
    },
  },
  plugins: [],
}