/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2b3825',
          50: '#f3f4f3',
          100: '#e7e9e6',
          200: '#c4cac2',
          300: '#a1ab9e',
          400: '#7b8877',
          500: '#5d6959',
          600: '#2b3825',
          700: '#232d1e',
          800: '#1a2216',
          900: '#12170f',
        },
      },
    },
  },
  plugins: [],
}