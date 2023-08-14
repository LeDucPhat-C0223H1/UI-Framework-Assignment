/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bee" : "#FEF4AC"
      },
      fontFamily: {
        "parisienne" : ['Parisienne'],
        "istok_Web" : ['Istok_Web'],
      }
    },

  },
  plugins: [],
}

