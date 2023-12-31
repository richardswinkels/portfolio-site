/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.white,
        secondary: {
          700: '#17293c',
          800: '#111e2c',
          900: '#0b141d',
        },
        accent: {
          100: '#8cb9ff',
          200: '#81b2ff',
          300: '#74aaff',
          400: '#66a2ff',
          500: '#5799ff',
          600: '#468fff',
          700: '#3384ff',
          800: '#1f78ff',
          900: '#0066ff',
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
};
