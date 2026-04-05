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
          500: '#A259FF',
          400: '#BF7BFF',
          300: '#D9ABFF',
          600: '#8A42EA',
          dim: 'rgba(162, 89, 255, 0.12)',
          border: 'rgba(162, 89, 255, 0.25)',
        },
        teal: {
          500: '#00D4FF',
          400: '#33DFFF',
          300: '#66E8FF',
          dim: 'rgba(0, 212, 255, 0.1)',
          border: 'rgba(0, 212, 255, 0.2)',
        },
        amber: {
          vel: '#F59E0B',
          bright: '#FBBF24',
          dim: 'rgba(245, 158, 11, 0.1)',
          border: 'rgba(245, 158, 11, 0.25)',
        },
        dark: {
          base: '#050505',
          deep: '#020202',
          elevated: '#0a0a0a',
          surface: '#0f0f15',
          card: '#08080a',
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
        'marquee-rev': 'marqueeReverse 42s linear infinite',
        'marquee-pause': 'marquee 35s linear infinite paused',
        'spin-slow': 'spin 25s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'counter': 'counterUp 0.5s ease-out forwards',
        'draw-line': 'drawLine 1.2s ease forwards',
        'orbit': 'orbit 8s linear infinite',
        'orbit-rev': 'orbit 12s linear infinite reverse',
        'ping-slow': 'pingSlow 3s ease-in-out infinite',
        'scan': 'scan 4s ease-in-out infinite',
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
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        counterUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(90px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(90px) rotate(-360deg)' },
        },
        pingSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.4)', opacity: '0' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '50%': { transform: 'translateY(100%)', opacity: '1' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
