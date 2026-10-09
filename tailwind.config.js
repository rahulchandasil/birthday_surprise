/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#2c2527',
        foreground: '#F8F1E8',
        'midnight': '#2c2527',
        'warm-ivory': '#F8F1E8',
        'dusty-rose': '#D99BA6',
        'soft-pink': '#F3D9DF',
        'deep-burgundy': '#6b384d',
        'muted-gold': '#d1b078',
      },
    },
  },
  plugins: [],
}
