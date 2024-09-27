/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Maison Neue', 'sans-serif'],
      serif: ['Cormorant', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}