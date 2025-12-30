/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flicker: 'flicker 4s infinite',
      },
      keyframes: {
        flicker: {
          '0%': { borderColor: 'transparent' },
          '25%': { borderColor: '#D1D5DB' },
          '50%': { borderColor: '#6B7280' },
          '75%': { borderColor: '#D1D5DB' },
          '100%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}

