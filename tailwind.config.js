/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0b0a08',
        cream: '#f5efe6',
        amber: {
          400: '#f5b94a',
          500: '#e89a2c',
          600: '#c97a18',
        },
      },
    },
  },
  plugins: [],
}
