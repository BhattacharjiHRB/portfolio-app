import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#090C14",
        surface: "#121729",
        "surface-2": "#171E33",
        line: "#232B45",
        violet: {
          DEFAULT: "#7C5CFF",
          soft: "#9C87FF",
          dim: "#4B3B99",
        },
        cyan: {
          DEFAULT: "#48D9CB",
          soft: "#8EEDE2",
          dim: "#1F5C57",
        },
        ink: {
          DEFAULT: "#F3F5FA",
          muted: "#909AB4",
          faint: "#5C6580",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, #1a2138 1px, transparent 1px), linear-gradient(to bottom, #1a2138 1px, transparent 1px)",
        "orb-gradient":
          "radial-gradient(circle at 30% 30%, #9C87FF 0%, #7C5CFF 35%, #4B3B99 65%, transparent 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 14s linear infinite",
        "spin-reverse": "spin-reverse 20s linear infinite",
        "pulse-glow": "pulse-glow 3.2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.1s steps(2, start) infinite",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
