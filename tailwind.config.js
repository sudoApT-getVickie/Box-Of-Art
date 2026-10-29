/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#070709',
          dark: '#0e0e13',
          card: 'rgba(18, 18, 24, 0.72)',
          border: 'rgba(255, 255, 255, 0.09)',
          amber: '#FF7A29',
          violet: '#8B5CF6',
          cyan: '#06B6D4',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
};
