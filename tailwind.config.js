/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        surface: '#121214',
        bone: '#ECECE6',
        muted: '#A3A39B',
        gold: {
          DEFAULT: '#E0A82E',
          bright: '#F6C730',
          soft: '#C98535',
          deep: '#B97E22',
        },
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'Arial', 'sans-serif'],
        body: ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
