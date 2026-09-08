/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Ground: rainforest dark, biased green-cyan rather than neutral grey
        teluk: {
          950: '#04100f',
          900: '#071916',
          850: '#0a221e',
          800: '#0e2b27',
          700: '#153a34',
          600: '#1f4e46',
        },
        // Bunga raya — the hibiscus on the coat of arms
        hibiscus: {
          50: '#fff2f5',
          100: '#ffdfe7',
          200: '#ffbccb',
          300: '#ff8da7',
          400: '#fb5c85',
          500: '#e4315c',
          600: '#c51e47',
          700: '#a01639',
          800: '#7c1530',
          900: '#65152b',
        },
        // Songket — the gold thread woven through Malay brocade
        songket: {
          300: '#ffe4a3',
          400: '#f7c96a',
          500: '#f2b138',
          600: '#cd8d1c',
        },
        // The water at Tanjung Rhu and over the Kilim mangroves
        lagoon: {
          300: '#7ff0e4',
          400: '#3ddbd0',
          500: '#12bdb6',
          600: '#0a9a97',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        jawi: ['"Noto Naskh Arabic"', 'serif'],
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        drift: { '0%': { transform: 'translate3d(0,0,0)' }, '100%': { transform: 'translate3d(-50%,0,0)' } },
        glowPulse: { '0%,100%': { opacity: 0.35 }, '50%': { opacity: 0.8 } },
        tide: { '0%,100%': { transform: 'translateX(0)' }, '50%': { transform: 'translateX(-14px)' } },
      },
      animation: {
        shimmer: 'shimmer 2.2s linear infinite',
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 40s linear infinite',
        glowPulse: 'glowPulse 5s ease-in-out infinite',
        tide: 'tide 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
