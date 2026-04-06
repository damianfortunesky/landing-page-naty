import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          100: "#ffd3e1",
          300: "#ff7aa8",
          500: "#ff4f8d",
          700: "#cc2a6a"
        },
        coal: {
          950: "#050505"
        }
      },
      boxShadow: {
        glow: "0 0 30px rgba(255, 79, 141, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
