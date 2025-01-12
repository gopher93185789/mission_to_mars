module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'], // Add a custom font-family
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
