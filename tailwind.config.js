/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#FFF5F3',
          100: '#FFEAE5',
          200: '#FFD5CC',
          300: '#FFB3A3',
          400: '#FF8C75',
          500: '#FF6B4A',
          600: '#E85A3C',
          700: '#CC4A2E',
          800: '#A63D26',
          900: '#802E1D',
        },
        sage: {
          50: '#F4F8F4',
          100: '#E8F0E8',
          200: '#D1E2D1',
          300: '#A8C9A8',
          400: '#7DB07D',
          500: '#5A9A5A',
          600: '#4A7F4A',
          700: '#3D673D',
          800: '#325232',
          900: '#284028',
        },
        cream: {
          50: '#FFF8F0',
          100: '#FFF0E0',
          200: '#FFE5CC',
          300: '#FFD4AD',
          400: '#FFC08A',
          500: '#FFAB66',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
