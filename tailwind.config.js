/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00ffff',
        neonPurple: '#a020f0',
        neonCyan: '#0ff'
      }
    },
  },
  plugins: [],
}
