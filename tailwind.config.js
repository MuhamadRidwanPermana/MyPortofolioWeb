/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      'primary': '#444444',
      'secondary': '#7f7f7f',
      'white': '#ffffff',
      'black': '#1E1E1E'
    }
  },
  plugins: [],
}