module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px", //tablet
      md: "768px", //laptop
      lg: "1024px", //desktop
      xl: "1280px", //HD -large secreen
    },

    fontFamily: {
      display: ["Circular Std Book", "sans-serif"],
      body: ["Circular Std Book", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      primary: "#3ec7ff",
      "gray-100": "#f4f4f4",
      gray: "#6C6C6C",
      "gray-500": "#a0a0a0",
      darkgray: "#2C3035",
      green: "#7CEC81",
      red: "#DA6B2F",
      blue: "#2289AD",
      turquoise: "#0F5B69",
    },
    textColor: (theme) => theme("colors"),
    textColor: {
      primary: "#3ec7ff",
      secondary: "#7CEC81",
      danger: "#DA6B2F",
      safe: "#7CEC81",
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      order: {
        first: "-9999",
        last: "9999",
        none: "0",
        normal: "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
