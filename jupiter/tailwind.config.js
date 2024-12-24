/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Core cyberpunk colors
        'cyber': {
          'neon-green': '#00ff00',
          'hot-pink': '#ff00ff',
          'deep-blue': '#000033',
          'black': '#000000',
          'matrix-green': '#003300'
        },
        // Additional accent colors
        'cyber-accent': {
          'purple': '#9933ff',
          'cyan': '#00ffff',
          'yellow': '#ffff00'
        }
      },
      backgroundColor: {
        'cyber-gradient': 'linear-gradient(0deg, rgba(0, 0, 51, 0.2) 50%, rgba(255, 0, 255, 0.2) 50%)',
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'blink': 'blink 1s infinite',
        'flicker': 'flicker 3s infinite',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        blink: {
          '50%': { opacity: '0' }
        },
        flicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0' }
        },
        matrix: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' }
        }
      },
      boxShadow: {
        'neon-green': '0 0 10px #00ff00',
        'neon-pink': '0 0 10px #ff00ff',
        'neon-glow': '0 0 20px #00ff00, 0 0 30px #ff00ff',
      },
      fontFamily: {
        'cyber': ['Courier New', 'Courier', 'monospace'],
      },
      borderWidth: {
        'cyber': '2px',
      },
      gridTemplateColumns: {
        'cyber-services': 'repeat(3, minmax(250px, 1fr))',
      },
      transitionProperty: {
        'glow': 'box-shadow, transform',
      },
      spacing: {
        'cyber': {
          'sm': '0.5rem',
          'md': '1rem',
          'lg': '1.5rem',
          'xl': '2rem',
        }
      }
    },
  },
  plugins: [
    // Custom plugin for cyber effects
    function({ addUtilities }) {
      const newUtilities = {
        '.cyber-glitch': {
          position: 'relative',
          '&::before, &::after': {
            content: 'attr(data-text)',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
          },
          '&::before': {
            left: '2px',
            textShadow: '-2px 0 #ff00ff',
            animation: 'glitch 2s infinite'
          },
          '&::after': {
            left: '-2px',
            textShadow: '2px 0 #00ff00',
            animation: 'glitch 3s infinite'
          }
        },
        '.cyber-scanner': {
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(rgba(255, 255, 255, 0.1), transparent)',
            transform: 'rotate(30deg)',
            animation: 'matrix 2s linear infinite'
          }
        },
        '.cyber-border': {
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(#000033, #000033), linear-gradient(90deg, #00ff00, #ff00ff)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }
      };
      addUtilities(newUtilities, ['hover', 'responsive']);
    }
  ]
};