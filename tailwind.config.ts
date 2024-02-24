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
          "linear-gradient(#4A9560, #4A9560 2px, transparent 2px, transparent 9px)",
      },
      backgroundSize: {
        shrink: "100% 9px",
      },
      keyframes: {
        cardPan: {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "0% -100%" },
        },
        cardImagePan: {
          "0%": { "background-position": "36% 42%", "background-size": "250%" },
          "20%": {
            "background-position": "30% 35%",
            "background-size": "250%",
          },
          "20.0001%": {
            "background-position": "60% 85%",
            "background-size": "500%",
          },
          "40%": {
            "background-position": "49% 81%",
            "background-size": "500%",
          },
          "40.0001%": {
            "background-position": "80% 42%",
            "background-size": "350%",
          },
          "60%": {
            "background-position": "84% 33%",
            "background-size": "350%",
          },
          "60.0001%": {
            "background-position": "0% 0%",
            "background-size": "300%",
          },
          "80%": { "background-position": "15% 4%", "background-size": "300%" },
          "80.0001%": {
            "background-position": "80% 10%",
            "background-size": "400%",
          },
          "100%": {
            "background-position": "72% 14%",
            "background-size": "400%",
          },
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
