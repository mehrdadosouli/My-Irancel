/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          50:'#ffff',
          200: "#f6f6f6",
          300: "#e7e7e7",
        },
        gold:{
          50:'#fffcef',
          400:'#fdc814'
        },
        gray:{
          500:'#818181',
          600:'#707070',
          700:'#626161'
        },
      },
    },
  },
  plugins: [],
};
