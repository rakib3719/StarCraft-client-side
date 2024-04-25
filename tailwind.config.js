/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{

      'raleway': [' "Raleway", sans-serif'],
      'poppoins': [' "Poppins", sans-serif'],
      'work-sense':['"Work Sans", sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

