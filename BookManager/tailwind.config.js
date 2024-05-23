/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", './public/index.html'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4931a8',
        'secondary-blue': '#6546e5',
        'dark-text-gray': '#838b93',
        'light-text-gray': '#94a1ab',
        'light-blue': '#B4C4FF',
        'very-light-blue': '#D7DDFD',
        'light-pink': '#eeaae3',
        'very-light-pink': '#ffc0f5',
        'menta': '#addccc',
        'light-menta': '#cff3e9',
        'light-purple': '#f9defd',
        'very-light-purple': '#fceeff',
      },
      fontFamily: {
        'quicksand': 'Quicksand' || 'sans-serif'
      }
    },
  },
  plugins: [],
}

