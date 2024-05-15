/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '12px'
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px'
    },
    extend: {
      colors: {
        primary: {
          900: '#000000',
          800: '#1E1E1E',
          700: '#3B3B3B',
          600: '#5B5B5B',
          500: '#919191',
          400: '#C1C1C1',
          300: '#E9E9E9',
          200: '#F1F1F1',
          100: '#FAFAFA',
          50: '#FFFFFF'
        }
      }
    }
  },
  plugins: []
}
