/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071B41',
        lime: '#8CCF00',
        hafizRed: '#D71920',
        gold: '#F5B800',
        paper: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(7, 27, 65, 0.10)',
        strong: '0 24px 80px rgba(7, 27, 65, 0.18)',
      },
    },
  },
  plugins: [],
}
