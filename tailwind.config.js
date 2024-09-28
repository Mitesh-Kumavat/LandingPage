/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    keyframes: {
      pop: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.2)' },
      },
    },
    animation: {
      pop: 'pop 1.5s ease-in-out infinite', // You can adjust timing here
    },
    colors: {
      primary: "#00040f",
      secondary: "#00f6ff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimBlue: "rgba(9, 151, 124, 0.1)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];