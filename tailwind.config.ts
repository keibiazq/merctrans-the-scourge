import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/banner-bg.png')",
        body: "url('/abstract-watercolor-frame.png')",
        "body-sm": "url('/background.svg')",
      },
      fontFamily: {
        rufina: ["var(--font-rufina)"],
        luxurious: ["var(--font-luxurious)"],
      },
      colors: {
        scourge: "#9C1515",
      },
    },
  },
  plugins: [],
};
