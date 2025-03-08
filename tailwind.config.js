/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      boxShadow: {
        'neon-primary': 'var(--primary-glow)',
        'neon-secondary': 'var(--secondary-glow)',
      },
      borderColor: {
        'neon-primary': 'var(--primary)',
        'neon-secondary': 'var(--secondary)',
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
}; 