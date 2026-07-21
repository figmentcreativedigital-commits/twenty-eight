import type { Config } from 'tailwindcss';

/**
 * 28 — Design tokens.
 * Palette is drawn directly from the client creative brief.
 * Colors are exposed as CSS variables in app/globals.css so they can be
 * themed or adjusted in one place.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: 'rgb(var(--color-ivory) / <alpha-value>)',
        sand: 'rgb(var(--color-sand) / <alpha-value>)',
        stone: 'rgb(var(--color-stone) / <alpha-value>)',
        mushroom: 'rgb(var(--color-mushroom) / <alpha-value>)',
        taupe: 'rgb(var(--color-taupe) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        'gold-deep': 'rgb(var(--color-gold-deep) / <alpha-value>)',
        eyebrow: 'rgb(var(--color-eyebrow) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Editorial display scale
        'display-xl': ['clamp(3.25rem, 7.4vw, 7rem)', { lineHeight: '0.98', letterSpacing: '-0.018em' }],
        'display-lg': ['clamp(2.6rem, 5.6vw, 5.25rem)', { lineHeight: '1.01', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.65rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.005em' }],
      },
      letterSpacing: {
        eyebrow: '0.22em',
        wide: '0.08em',
      },
      maxWidth: {
        shell: '1360px',
        prose: '68ch',
        measure: '46ch',
      },
      spacing: {
        section: 'clamp(5rem, 12vh, 9rem)',
        'section-sm': 'clamp(3.5rem, 8vh, 6rem)',
        'section-lg': 'clamp(7rem, 16vh, 12rem)',
      },
      borderRadius: {
        card: '2px',
      },
      boxShadow: {
        frame: '0 30px 80px -50px rgba(61, 58, 55, 0.45)',
        lift: '0 20px 60px -35px rgba(61, 58, 55, 0.5)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '900': '900ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 1.2s ease both',
      },
    },
  },
  plugins: [],
};

export default config;
