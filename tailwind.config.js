module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#f5f5f5",
        accent: "#007aff",
      },
      fontFamily: {
        sans: ["San Francisco", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
