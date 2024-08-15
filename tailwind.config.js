/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barbra: ['barbra', 'serif'],
        barbraI: ['barbraI', 'serif'],
      },
      fontSize: {
        '14xl': ['15rem', {
          lineHeight: '15rem',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
        '12xl': ['12rem', {
          lineHeight: '10rem',
          letterSpacing: '0.02em',
          fontWeight: '700',
        }],
      },
    },
  },
  plugins: [],
}