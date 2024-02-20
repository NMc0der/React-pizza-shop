/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        maxSmall: { max: "640px" },
      },
      backgroundImage: {
        img1: "url('./assets/nypd-cheese-pizza.jpg')",
      },
      fontFamily: {
        cursive: ["cursive"],
      },
    },
  },
  plugins: [],
};
