/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'walmart-blue': '#0071ce',
        'walmart-yellow': '#ffc220',
        'walmart-dark-blue': '#004c91',
      },
    },
  },
  plugins: [],
}
