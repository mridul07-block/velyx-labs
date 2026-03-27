/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velyx: {
          500: '#7F77DD',
          400: '#9B94E8',
          300: '#B5B0EF',
          600: '#6960C9',
          dim: 'rgba(127,119,221,0.12)',
          border: 'rgba(127,119,221,0.25)',
        },
        dark: {
          base: '#0a0a0a',
          deep: '#06060f',
          elevated: '#0d0d18',
          surface: '#111128',
          card: '#0e0e1f',
        },
        text: {
          muted: '#6b6b84',
          sub: '#9898ae',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'sans-serif'],
        mono:    ['Space Mono', 'monospace'],
        // Legacy shims — remove after all pages are updated
        syne:    ['Space Grotesk', 'sans-serif'],
        dm:      ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(127,119,221,0.35)',
        'glow-sm': '0 0 20px rgba(127,119,221,0.2)',
        'glow-lg': '0 0 80px rgba(127,119,221,0.5)',
        glass: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        'glass-hover': '0 16px 48px rgba(0,0,0,0.6), 0 0 30px rgba(127,119,221,0.25)',
        'card-border': 'inset 0 0 0 1px rgba(127,119,221,0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-delay2': 'float 6s ease-in-out 4s infinite',
        'pulse-orb': 'pulseOrb 5s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-pause': 'marquee 35s linear infinite paused',
        'spin-slow': 'spin 25s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'counter': 'counterUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseOrb: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        counterUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
