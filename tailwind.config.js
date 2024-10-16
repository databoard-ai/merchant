/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash-light': ['ClashDisplay-Light', 'sans-serif'],
        'clash-regular': ['ClashDisplay-Regular', 'sans-serif'],
        'clash-medium': ['ClashDisplay-Medium', 'sans-serif'],
        'clash-semibold': ['ClashDisplay-Semibold', 'sans-serif'],
        'clash-bold': ['ClashDisplay-Bold', 'sans-serif'],
        'clash-variable': ['ClashDisplay-Variable', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: "#4283E4",
          gray: "#6C6C6C",
          orange: "#FF4D00",
        },
      }
    },
  },
  plugins: [],
}