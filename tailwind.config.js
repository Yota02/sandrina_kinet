/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FCFBF9',
          100: '#FAF9F6',
          200: '#F4F2EC',
          300: '#EAE6DC',
        },
        stone: {
          surface: '#F0EFEA',
          subtle: '#E5E3DC',
        },
        ink: {
          900: '#1C1C1E',
          800: '#2C2C2E',
          700: '#3A3A3C',
          500: '#636366',
          400: '#8E8E93',
        },
        gold: {
          light: '#D4AF77',
          DEFAULT: '#9E7B4F',
          dark: '#7D5F38',
        },
        sage: {
          light: '#889C8F',
          DEFAULT: '#5B7065',
          dark: '#3F4F46',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gallery': '0 10px 30px -10px rgba(28, 28, 30, 0.08), 0 2px 6px -2px rgba(28, 28, 30, 0.04)',
        'art-frame': '0 20px 40px -15px rgba(28, 28, 30, 0.15), 0 0 0 1px rgba(28, 28, 30, 0.05)',
        'hover-art': '0 25px 50px -12px rgba(28, 28, 30, 0.22)',
      }
    },
  },
  plugins: [],
}
