/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
      },
    },
    borderRadius: {
      sm: "0.125rem",
      DEFAULT: "0.125rem",
      md: "0.125rem",
      lg: "0.125rem",
      xl: "0.125rem",
      "2xl": "0.125rem",
      "3xl": "0.125rem",
      full: "0.125rem",
    },
  },
  darkMode: "class",

  plugins: [],
};
