/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        "main": "var(--text-color)",
        "btn-primary": "var(--text-button-primary)",
        "btn-secondary": "var(--text-button-secondary)",
        "btn-third": "var(--button-primary)",
      },
      backgroundColor: {
        "main": "var(--background-main)",
        "keypad": "var(--background-keypad)",
        "input": "var(--background-input)",
        "btn-primary": "var(--button-primary)",
        "btn-secondary": "var(--button-secondary)",
        "btn-third": "var(--button-third)",
      }
    },
  },
  plugins: [],
};
