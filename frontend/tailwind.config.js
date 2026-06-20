/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        mocha: "#8C5F4D",
        accent: "#F4AAB9",
        espresso: "#4C2E2B",
        base: "#FFF8F6",
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
        hero: ['"Cedarville Cursive"', "Cursive"]
      },
    },
  },
  plugins: [],
}

