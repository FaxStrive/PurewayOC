import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: "hsl(var(--destructive))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Brand colors accessible directly
        brand: {
          primary: "var(--color-primary)",
          "primary-light": "var(--color-primary-light)",
          "primary-dark": "var(--color-primary-dark)",
          secondary: "var(--color-secondary)",
          "secondary-light": "var(--color-secondary-light)",
          "secondary-dark": "var(--color-secondary-dark)",
          cyan: "var(--color-cyan)",
          "cyan-light": "var(--color-cyan-light)",
          "cyan-pale": "var(--color-cyan-pale)",
          accent: "var(--color-accent)",
          "accent-light": "var(--color-accent-light)",
          "accent-dark": "var(--color-accent-dark)",
          surface: "var(--color-surface)",
          "surface-alt": "var(--color-surface-alt)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "float-up": {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.3" },
          "100%": { transform: "translateY(-10vh) scale(1)", opacity: "0" },
        },
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.08" },
          "50%": { transform: "scale(1.15)", opacity: "0.12" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
        "float-up": "float-up 15s linear infinite",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
