/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        symbio: {
          dark: '#000010',      
          light: '#F0F0F5',      
          purple: '#764A95',     // Primária
          neon: '#B265D9',       // Brilho
          glass: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'], // Fonte do Título
      },
    },
  },
  plugins: [],
}