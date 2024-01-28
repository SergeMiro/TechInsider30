/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        myColor1: "rgba(84, 133, 197, 0.904)",
        myColor2: "rgba(16, 16, 149, 0.908)",
        myColor3: "rgba(140, 231, 242, 1)",
      },
      padding: {
        bigP: "35px",
        mediumP: "18px",
        littleP: "7px",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1028px",
        xl: "1440px",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        yes: ["Yeseva One", "cursive"],
        meri: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
