/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'dark': '2px 5px 25px -3px rgba(180, 180, 180, 0.25);',
        'light': '2px 5px 25px -3px rgba(180, 180, 180, 0.25);',
      }
    },
  },
  plugins: [],
}

