/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        magentaPink: "#f92bb1",
        electricPurple: "#820de7",
        vividIndigo: "#460def",
        skyBlue: "#00bdff",
        babyBlue: "#f3f3ff"
      }
    },
  },
  plugins: [],
}

