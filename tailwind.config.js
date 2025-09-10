/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clandestinos-red': '#E53E3E',
        'clandestinos-yellow': '#FBBF24',
        'clandestinos-green': '#38A169',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}