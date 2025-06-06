/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,,jsx}'],
  theme: {
    extend: {
      colors: {
  brand: {
    surface: '#f3f4f6',           // Light Gray
    primary: '#86efac',           // soft green
    'primary-dark': '#16a34a',    // strong green
    text: '#0a0a0a',              // text color soft black
    'text-muted': '#9ca3af',      // secondary/disabled text
    white: '#ffffff',            
    dark: '#032b20',  
    'deep-black': '#0A0A0A',       //pure /deep black
    'deep-forest-green':'#014427'
  },
}

    },
  },
  plugins: [],
}