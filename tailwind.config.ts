import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        charcoal: "#161412",
        charcoal2: "#1f1c18",
        honey: "#ffce35",
        "honey-dark": "#e0a800",
        "honey-deep": "#a86a00",
        cream: "#fff8e6",
        "cream-dim": "#f3ecd6",
      },
      // fontFamily: {
      //   display: ["var(--font-fraunces)", "serif"],
      //   body: ["var(--font-jakarta)", "sans-serif"],
      // },
      backgroundImage: {
        hexgrid:
          "radial-gradient(circle at 1px 1px, rgba(255,206,53,0.18) 1px, transparent 0)",
      },
      keyframes: {
        drip: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        drip: "drip 2.4s ease-in infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
