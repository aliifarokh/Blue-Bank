/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        updown: "updown 8s linear infinite alternate"
      }
    },
    fontFamily: {
      Dana : "Dana"
    }
  },
  plugins: [],
}