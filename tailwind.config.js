/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ah: {
          black: '#050505',
          charcoal: '#111114',
          surface: '#16161a',
          card: '#1a1a20',
          elevated: '#202028',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-red': 'rgba(255, 23, 56, 0.35)',
          red: '#FF1738',
          'red-bright': '#ff2d4c',
          'red-dark': '#b3001e',
          'red-glow': 'rgba(255, 23, 56, 0.4)',
          silver: '#C7CBD1',
          white: '#F5F5F5',
          muted: '#A4A7AE',
          subtle: '#686B73',
        }
      },
      fontFamily: {
        heading: ['Orbitron', 'Rajdhani', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Rajdhani', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'crimson': '0 0 25px rgba(255, 23, 56, 0.35)',
        'crimson-lg': '0 0 45px rgba(255, 23, 56, 0.5)',
        'crimson-sm': '0 0 12px rgba(255, 23, 56, 0.3)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-sweep': 'sweep 3s ease-in-out infinite',
      },
      keyframes: {
        sweep: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}
