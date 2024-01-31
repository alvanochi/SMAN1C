/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "doc-1": "url('/doc1.png')",
        "doc-2": "url('/doc2.png')",
        "doc-3": "url('/doc3.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        padding: {
          // DEFAULT: "4rem",
          sm: "2rem",
          // lg: "4rem",
          xl: "5rem",
          // "2xl": "6rem",
        },
        center: true,
      },
      fontWeight: {
        black: "1000",
      },
    },
  },
  plugins: [],
};
