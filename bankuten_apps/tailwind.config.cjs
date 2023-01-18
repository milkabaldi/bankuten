/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(3, 3, 1, 0.9) ;',
        secondary: "#FDDD3D",
        dimWhite: "#fff",
        dimWhiteBg: "#F7F8FA",
        dimPeach: '#FFCCBC',
        dimLightGrey: 'rgba(3, 3, 1, 0.5);',
        dimBlue: 'rgba(220, 224, 233, 0.4);',
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
  },
  plugins: [],
};