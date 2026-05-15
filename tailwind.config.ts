import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pastel-dream palette
        cream: "#fdf8ff",
        // background base — cool white
        canvas: "#f8f6ff",
        ink: {
          900: "#1c1633", // primary text — deep cool indigo
          800: "#2d2655",
          700: "#4a3f7a",
          600: "#7065a8",
          500: "#9a90c8",
          400: "#bdb4dc",
          300: "#dcd6ec",
          200: "#ebe6f5",
          100: "#f4f1fb",
        },
        bloom: {
          lavender: "#d4c5ff",
          mint: "#b8f0d8",
          sky: "#b8e3ff",
          peach: "#ffd4c2",
          pink: "#ffc8e0",
          butter: "#fff0a8",
        },
        accent: {
          violet: "#7c5cff",
          cyan: "#3bbfff",
          coral: "#ff7f9f",
          mint: "#46d6a0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "DM Serif Display", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "bloom-gradient":
          "linear-gradient(135deg, #d4c5ff 0%, #b8e3ff 33%, #b8f0d8 66%, #ffd4c2 100%)",
        "warm-gradient":
          "linear-gradient(135deg, #ffc8e0 0%, #ffd4c2 50%, #fff0a8 100%)",
        "cool-gradient":
          "linear-gradient(135deg, #d4c5ff 0%, #b8e3ff 60%, #b8f0d8 100%)",
        "soft-radial":
          "radial-gradient(60% 50% at 50% 30%, rgba(212,197,255,0.5) 0%, rgba(255,255,255,0) 70%)",
        dots: "radial-gradient(circle, rgba(28,22,51,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        dots: "24px 24px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(124, 92, 255, 0.12)",
        "soft-lg": "0 20px 60px rgba(124, 92, 255, 0.18)",
        "soft-xl": "0 30px 80px rgba(124, 92, 255, 0.22)",
        glow: "0 0 60px rgba(184, 227, 255, 0.45)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        float: "float 8s ease-in-out infinite",
        "float-card": "float-card 7s ease-in-out infinite",
        "blob": "blob 18s ease-in-out infinite",
        "blob-slow": "blob 26s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "spin-slow": "spin 22s linear infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-card": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(-0.5deg)" },
        },
        blob: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1) rotate(0deg)",
            borderRadius: "50% 40% 60% 50% / 50% 60% 40% 50%",
          },
          "33%": {
            transform: "translate(30px, -40px) scale(1.1) rotate(120deg)",
            borderRadius: "60% 50% 40% 60% / 40% 50% 60% 50%",
          },
          "66%": {
            transform: "translate(-20px, 30px) scale(0.95) rotate(240deg)",
            borderRadius: "40% 60% 50% 50% / 60% 40% 50% 60%",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
