/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        'mfsm': '450px',
        'sm': '640px',
        'md': '768px',
        'mflg': '900px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

