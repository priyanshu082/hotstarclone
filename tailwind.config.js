/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#040714',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      screens:{
        'mobile':'375px',
        'tablet':'640px',
        'laptop':'800px'
      }
    },
    
  },
  plugins: [],
}
