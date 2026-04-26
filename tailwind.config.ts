import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0EA5E9",
          secondary: "#F0F9FF",
          accent: "#38BDF8",
          text: "#0C4A6E",
          obsidian: "#082F49",
          indigo: "#0284C7",
          tangerine: "#0EA5E9",
          beige: "#FFFFFF",
          brown: "#0EA5E9",
          dark: "#075985",
          green: "#38BDF8",
          "green-dark": "#0369A1",
          "green-light": "#E0F2FE",
          blue: "#0EA5E9",
          "blue-dark": "#0284C7",
          orange: "#38BDF8",
          "orange-dark": "#0369A1",
          gold: "#38BDF8",
          "gold-light": "#F0F9FF",
          navy: "#0369A1",
          "navy-light": "#0EA5E9",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Inter", "sans-serif"],
        heading: ["var(--font-outfit)", "Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "gradient-x": "gradient-x 3s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(132,86,59,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(132,86,59,0)" },
        },
      },
      backgroundSize: {
        "200%": "200%",
      },
    },
  },
  plugins: [],
};

export default config;
