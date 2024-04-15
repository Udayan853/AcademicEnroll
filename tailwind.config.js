/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-1': '#0B0C10',
        'primary-2': '#1F2833',
        'primary-3': '#C5C6C7',
        'primary-4': '#66FCF1',
        'primary-5': '#45A29E',
      },
    },
  },
  plugins: [],
}
