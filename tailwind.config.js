/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '390px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      '2xl': '1540px',
    },

  },
  plugins: [require("daisyui")],
}