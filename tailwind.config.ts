import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-gradient":
          "linear-gradient(#1E354A, #1E354A 3px, transparent 3px, transparent 9px)",
      },
      keyframes: {
        cardPan: {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "0% -100%" },
        },
      },
      aspectRatio: {
        card: "10 / 16",
      },
    },
  },
  plugins: [],
};
export default config;
