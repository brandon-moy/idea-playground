import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "letter-jump": "letter-bounce 2s linear infinite",
      },
      animationDelay: {
        250: "250ms",
        750: "750ms",
        1250: "1250ms",
        1750: "1750ms",
        2250: "2250ms",
      },
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
      fontFamily: {
        "st-mono": "Share Tech Mono",
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
        "letter-bounce": {
          "0%, 25%": { transform: "translateY(0px)" },
          "15%": { transform: "translateY(-5px)" },
        },
        nikkeLoad: {
          "0%": { transform: "scale(0.9) rotate(0deg)" },
          "7.5%": { transform: "scale(1) rotate(45deg)" },
          "15%": { transform: "scale(0.9) rotate(90deg)" },
          "25%": { transform: "scale(0.9) rotate(90deg)" },
          "32.5%": { transform: "scale(1) rotate(135deg)" },
          "40%": { transform: "scale(0.9) rotate(180deg)" },
          "50%": { transform: "scale(0.9) rotate(180deg)" },
          "57.5%": { transform: "scale(1) rotate(225deg)" },
          "65%": { transform: "scale(0.9) rotate(270deg)" },
          "75%": { transform: "scale(0.9) rotate(270deg)" },
          "82.5%": { transform: "scale(1) rotate(315deg)" },
          "90%": { transform: "scale(0.9) rotate(360deg)" },
          "100%": { transform: "scale(0.9) rotate(360deg)" },
        },
        nikkeDarkX: {
          "0%": { backgroundColor: "rgb(75, 85, 99)" },
          "7.5%": { backgroundColor: "rgb(156, 163, 175" },
          "15%": { backgroundColor: "rgb(209, 213, 219)" },
          "25%": { backgroundColor: "rgb(209, 213, 219)" },
          "32.5%": { backgroundColor: "rgb(156, 163, 175" },
          "40%": { backgroundColor: "rgb(75, 85, 99)" },
          "50%": { backgroundColor: "rgb(75, 85, 99)" },
          "57.5%": { backgroundColor: "rgb(156, 163, 175" },
          "65%": { backgroundColor: "rgb(209, 213, 219)" },
          "75%": { backgroundColor: "rgb(209, 213, 219)" },
          "82.5%": { backgroundColor: "rgb(156, 163, 175" },
          "90%": { backgroundColor: "rgb(75, 85, 99)" },
          "100%": { backgroundColor: "rgb(75, 85, 99)" },
        },
        nikkeLightX: {
          "0%, 100%": { backgroundColor: "rgb(209, 213, 219)" },
          "50%": { backgroundColor: "rgb(156, 163, 175" },
        },
      },
      aspectRatio: {
        card: "10 / 16",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
export default config;
