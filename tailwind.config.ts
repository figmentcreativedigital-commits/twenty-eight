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
        ivory: 'var(--color-ivory)',
        sand: 'var(--color-sand)',
        stone: 'var(--color-stone)',
        mushroom: 'var(--color-mushroom)',
        taupe: 'var(--color-taupe)',
        charcoal: 'var(--color-charcoal)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        line: 'var(--color-line)',
        gold: 'var(--color-gold)',
        'gold-deep': 'var(--color-gold-deep)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Editorial display scale
        'display-xl': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2.5rem, 5.5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.005em' }],
        'display-sm': ['clamp(1.65rem, 3vw, 2.5rem)', { lineHeight: '1.12' }],
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
