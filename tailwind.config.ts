import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "#060609",
          elevated: "#111118",
          soft: "#171723",
          stroke: "#2a2a35"
        },
        rose: {
          100: "#f9d8e8",
          200: "#ecb2ca",
          300: "#dc86aa",
          400: "#cb5f90",
          500: "#b8477f"
        },
        text: {
          primary: "#f6f4f8",
          secondary: "#c8c4cd",
          muted: "#9993a1"
        }
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Cormorant Garamond", "ui-serif", "Georgia", "serif"]
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem"
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.2rem",
        "3xl": "1.6rem"
      },
      boxShadow: {
        glow: "0 10px 35px rgba(184, 71, 127, 0.2)",
        card: "0 18px 45px rgba(4, 4, 8, 0.45)",
        soft: "0 8px 22px rgba(6, 6, 10, 0.4)"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
