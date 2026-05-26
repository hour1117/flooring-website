import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Noto Naskh Arabic", "serif"],
      },
      fontSize: {
        "display-xl": ["3.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-md": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
