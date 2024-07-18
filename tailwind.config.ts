import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        monainn: ['var(--font-monainn)'],
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
        grotesk: ['var(--font-grotesk)']
      },
      fontSize: {
        'hairline-1': ['16px', { lineHeight: '16px', letterSpacing: '0px' }],
        'headline-4': ['40px', { lineHeight: '44px', letterSpacing: '-0.4px' }],
        'headline-5': ['34px', { lineHeight: '38px', letterSpacing: '-0.6px' }],
        'headline-6': ['28px', { lineHeight: '34px', letterSpacing: '-0.6px' }],
        'headline-7': ['20px', { lineHeight: '28px', letterSpacing: '0px' }],
        'body-2': ['16px', { lineHeight: '26px', letterSpacing: '0px' }],
        'caption-1': ['14px', { lineHeight: '22px', letterSpacing: '0px' }],
        'caption-2': ['12px', { lineHeight: '20px', letterSpacing: '0px' }],
        'button-xs': ['14px', { lineHeight: '24px', letterSpacing: '0px' }],
        'button-sm': ['16px', { lineHeight: '28px', letterSpacing: '-0.4px' }],
      },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        'arrow-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50px)' },
        },
        'arrow-in': {
          '0%': { transform: 'translateX(-50px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'text-slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: "0" },
          '100%': { transform: 'translateX(0)', opacity: "1" },
        },
        'text-slide-out': {
          '0%': { transform: 'translateX(0)', opacity: " 1" },
          '100%': { transform: 'translateX(100%)', opacity: "0 " },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'arrow-out': 'arrow-out 0.3s ease-in-out forwards',
        'arrow-in': 'arrow-in 0.3s ease-in-out forwards',
        'text-slide-in': 'text-slide-in 0.4s ease-in-out forwards',
        'text-slide-out': 'text-slide-out 0.4s ease-in-out forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config