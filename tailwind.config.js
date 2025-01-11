/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Orbitron', 'sans-serif'],
      },
      colors: {
        'brand': {
          '300': '#4C8BF5',
          '400': '#3B82F6',
        },
        'accent': {
          '400': '#10B981'
        }
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(45deg, #4C8BF5, #10B981)',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'blink': 'blink 1s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}
