import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "dark"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'stone-brown': {
          50: '#f5f3f0',
          100: '#ebe7e0',
          200: '#d6cfc2',
          300: '#c2b8a3',
          400: '#ada085',
          500: '#998866',
          600: '#7a6d52',
          700: '#5c523d',
          800: '#3d3629',
          900: '#1f1b14',
          950: '#15130e',
        },
        'ash-brown': {
          50: '#f4f2f0',
          100: '#e9e4e2',
          200: '#d4c9c4',
          300: '#beaea7',
          400: '#a8938a',
          500: '#93786c',
          600: '#756057',
          700: '#584841',
          800: '#3b302b',
          900: '#1d1816',
          950: '#15110f',
        },
        'dusty-lavender': {
          50: '#f4f0f3',
          100: '#eae1e6',
          200: '#d5c3cd',
          300: '#c0a5b5',
          400: '#aa889c',
          500: '#956a83',
          600: '#775569',
          700: '#5a3f4f',
          800: '#3c2a34',
          900: '#1e151a',
          950: '#150f12',
        },
        'amethyst-smoke': {
          50: '#f4f0f5',
          100: '#e8e1ea',
          200: '#d1c2d6',
          300: '#bba4c1',
          400: '#a486ac',
          500: '#8d6798',
          600: '#715379',
          700: '#553e5b',
          800: '#38293d',
          900: '#1c151e',
          950: '#140e15',
        },
        'periwinkle': {
          50: '#eeeff6',
          100: '#dee0ed',
          200: '#bdc1db',
          300: '#9ca2c9',
          400: '#7a83b8',
          500: '#5963a6',
          600: '#475085',
          700: '#363c63',
          800: '#242842',
          900: '#121421',
          950: '#0c0e17',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
