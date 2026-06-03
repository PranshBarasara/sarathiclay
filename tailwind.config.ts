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
        secondary: "var(--secondary)",
        gold: {
          light: "#E8C88D",
          DEFAULT: "#C8A96B",
          dark: "#A77A3C",
        },
        bronze: {
          DEFAULT: "#A77A3C",
        },
        mutedText: "#B8B8B8",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C8A96B 0%, #E8C88D 50%, #A77A3C 100%)",
        "luxury-gradient": "linear-gradient(180deg, rgba(7, 7, 7, 0) 0%, rgba(7, 7, 7, 0.9) 80%, #070707 100%)",
        "gold-border-glow": "linear-gradient(90deg, transparent, #C8A96B, transparent)",
      },
      animation: {
        "marquee-slow": "marquee 40s linear infinite",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
