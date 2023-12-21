/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px'
    },
    extend: {},
    colors: {
      black: "rgb(32,33,36)",
      grey: "rgb(100 116 139)"
    }
  },
  plugins: [],
}

