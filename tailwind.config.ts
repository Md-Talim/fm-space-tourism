import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      bellefair: "var(--bellefair)",
      barlow: "var(--barlow)",
      "barlow-condensed": "var(--barlow-condensed)",
    },
    extend: {
      colors: {
        dark: "#0B0D17",
        light: "#D0D6F9",
      },
    },
  },
  plugins: [],
} satisfies Config;
