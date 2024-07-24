/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#0784c3',
        customGreen: '#00A184',
      },
    },
  },
  plugins: [],
}

