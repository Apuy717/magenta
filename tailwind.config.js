/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        infinitebounce: {
          "0%, 100%": {
            transform: "translateY(-0px)",
            "-webkit-transfrom": "translateY(-0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
            "-webkit-transfrom": "translateY(-12px)",
          },
        },
        zoomInOut: {
          "0%, 100%": {
            transform: "scale(1)",
            "-webkit-transform": "scale(1)",
          },
          "50%": {
            transform: "scale(0.5)",
            "-webkit-transform": "scale(0.5)",
          },
        },
        moveRighttoLeft: {
          "0%": {
            transform: "translateX(0%)",
          },
          "50%": {
            transform: "translateX(-36%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        infinitebounce: "infinitebounce 3s infinite",
        zoomInOut: "zoomInOut 3s infinite",
        moveRighttoLeft: "moveRighttoLeft 7s infinite",
      },
      colors: {
        softviolet: "#e2d8dd",
        softorange: "#ffe1cb",
        softyellow: "#f3deab",
        white: "#ffffff",
        magenta: "#EC008C",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
      },
    },
  },
  plugins: [],
};
