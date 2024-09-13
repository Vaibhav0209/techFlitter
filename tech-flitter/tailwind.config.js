/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        main: "#283246",
        fromgrad: "#535A6A",
        tograd: "#283246",
      },
    },
  },
  plugins: [require("daisyui")],
};
