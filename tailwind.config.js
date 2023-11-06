/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#3294F8',
        },

        gray: {
          100: '#E7EDF4',
          200: '#C4D4E3',
          300: '#AFC2D4',
        },

        cyan: {
          100: '#7B96B2',
          200: '#3A536B',
          500: '#1C2F41',
          600: '#112131',
          700: '#0B1B2B',
          800: '#071422',
          900: '#040F1A',
        },
      },

      fontFamily: {
        primary: 'Nunito, sans-serif',
      },
    },
  },
  plugins: [],
}
