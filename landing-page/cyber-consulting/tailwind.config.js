// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber': {
          'black': 'var(--color-cyber-black)',
          'blue': 'var(--color-cyber-blue)',
          'pink': 'var(--color-cyber-pink)',
          'purple': 'var(--color-cyber-purple)',
          'green': 'var(--color-cyber-green)',
        }
      }
    }
  },
  plugins: [],
}