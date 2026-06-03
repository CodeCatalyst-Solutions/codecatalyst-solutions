/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#ffb600",
          navy: "#001c56",
        },
        tech: {
          primary: "#ffb600",
          secondary: "#001c56",
          accent: "#ffb600",
        },
        business: {
          primary: "#001c56",
          secondary: "#ffb600",
          accent: "#ffb600",
        },
      },

      backgroundImage: {
        "tech-gradient":
          "linear-gradient(to right, #001c56, #ffb600)",

        "business-gradient":
          "linear-gradient(to right, #001c56, #ffb600)",
      },

      boxShadow: {
        premium:
          "0 10px 40px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};