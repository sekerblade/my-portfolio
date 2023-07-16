/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#F6416C",
        primaryContent: "#FFDE7D",
        primarySubcontent: "#E9FFC2",
        primaryBase: "#898121",
        primaryAccent: "#00B8A9",
        primaryBackground: "#F8F3D4",
      },
    },
  },
  plugins: [],
};
