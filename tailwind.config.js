/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "blue-b1": "hsl(228, 45%, 44%)",
        "Soft-blue": "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        "Very-dark-blue-main": "hsl(217, 54%, 11%)",
        "Very-dark-blue-card": "hsl(216, 50%, 16%)",
        "Very-dark-blue-line": "hsl(215, 32%, 27%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};

