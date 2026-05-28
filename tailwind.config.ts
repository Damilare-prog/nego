import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nego: {
          red: "#df2531",
          "red-dark": "#c41f2a",
          "red-glow": "rgba(223, 37, 49, 0.3)",
        },
      },
      fontFamily: {
        display: ["Cinzel Decorative", "serif"],
        body: ["DM Sans", "sans-serif"],
        accent: ["Playfair Display", "serif"],
      },
      animation: {
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
