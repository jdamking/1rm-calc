/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "verydark":'#151516',
        "dark": '#1D1D1F',
        "medium": '#293245',
        "light": '#DCDCE5'

      }
    },
  },
  plugins: [],
}

