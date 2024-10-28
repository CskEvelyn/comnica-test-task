/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        green: {
          main: "#29a98b",
          dark: "#20876f",
          darker: "#186553",
        },
        purple: "#682c5d",
        grey: "#31363c",
      },
    },
  },
  plugins: [],
};
