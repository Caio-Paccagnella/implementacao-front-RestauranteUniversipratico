/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        KS: ['KS-Regular'],
        'KS-Bold': ['KS-Bold'],
      },
      colors: {verde: "#96BD3A", fundo: "#F1F3F0", verde_escuro: "#127E1F"}
    },
  },
  plugins: [],
};