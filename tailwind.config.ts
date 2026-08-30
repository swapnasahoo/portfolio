import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#111111",
          soft: "#3a3a3a",
          mute: "#6b6b6b",
          faint: "#a3a3a3",
        },
        paper: {
          DEFAULT: "#fafaf7",
          soft: "#f3f3ee",
          line: "#e6e6e0",
        },
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};

export default config;
