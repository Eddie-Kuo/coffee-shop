/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        red: "#DC3535",
        orange: "#D17842",
        black: "#0C0F14",
        darkGrey: "#252A32",
        mediumGrey: "#52555A",
        lightGrey: "#AEAEAE",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
