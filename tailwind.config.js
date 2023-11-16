/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", './public/index.html'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4931a8',
        'secondary-blue': '#6546e5',
        'dark-text-gray': '#838b93',
        'light-text-gray': '#94a1ab'
      },
      fontFamily: {
        'quicksand': 'Quicksand' || 'sans-serif'
      }
    },
  },
  plugins: [],
}

