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
    fontSize: {
      sm: ['14px', '21px'],
      base: ['16px', '24px'],
      lg: ['18px', '27px'],
      xl: ['20px', '30px'],
      '2xl': ['24px', '36px'],
      '2xxl': ['28px', '42px'],
      '3xl': ['30px', '45px'],
      '4xl': ['32px', '38.4px'],
      '5xl': ['36px', '54px'],
      '6xl': ['48px', '72px'],
      '7xl': ['60px', '90px'],
      '8xl': ['72px', '108px'],
      '9xl': ['96px', '144px'],
      '10xl': ['128px', '192px']
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
      },
      lineHeight: {
        75: '1.875rem'
      },
      spacing: {
        18: '72px',
        30: '120px'
      }
    }
  },
  plugins: []
}
