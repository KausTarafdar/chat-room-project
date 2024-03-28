/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title-green' : 'C0F58B'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}