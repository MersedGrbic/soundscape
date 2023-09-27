/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#161616",
        "secondary-bg": "#282828",
        "text-grey": "#B3B3B3",
      },
    },
  },
  plugins: [],
};
