/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "bg-main": "var(--background-main)",
        "bg-keypad": "var(--background-keypad)",
        "bg-input": "var(--background-input)",
        "bg-btn-primary": "var(--button-primary)",
        "bg-btn-secondary": "var(--button-secondary)",
        "bg-btn-third": "var(--button-third)",
        "color-main": "var(--text-color)",
        "color-btn-primary": "var(--text-button-primary)",
        "color-btn-secondary": "var(--text-button-secondary)",
      },
    },
  },
  plugins: [],
};
