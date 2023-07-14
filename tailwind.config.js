/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#FCE700",
        primaryContent: "#939B62",
        primarySubcontent: "#E9FFC2",
        primaryBase: "#898121",
        primaryAccent: "#183A1D",
        primaryBackground: "#AACB73",
      },
    },
  },
  plugins: [],
};
