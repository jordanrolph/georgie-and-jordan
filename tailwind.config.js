const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "green-beret": {
          light: "#3C433D",
          DEFAULT: "#353C33",
        },
        "dusty-pink": {
          DEFAULT: "#FDDBDD",
          dark: "#FAD2D5",
        },
        "sunny-yellow": {
          DEFAULT: "#F5B97A",
        },
      },
      backgroundImage: {
        portrait: "url('/portrait.png')",
        "portrait-spokes": "url('/portrait-spokes.png')",
        "pattern-autumn-green": "url('/autumn-green.svg')",
        "pattern-topography-green": "url('/topography-green.svg')",
        "pattern-bubbles-yellow": "url('/bubbles-yellow.svg')",
        "pattern-wiggle-pink": "url('/wiggle-pink.svg')",
        "pattern-leaf-pink": "url('/leaf-pink.svg')",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      color: ["group-hover"],
    },
  },
  plugins: [],
};
