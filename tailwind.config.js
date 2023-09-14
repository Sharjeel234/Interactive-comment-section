/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'my-blue': '#6590FF',
        'my-red': '#E33E38',
        'my-purple': '#8344DB',
        'badge': '#8344DB1A',
        'my-grey': '#646464',
        'body': '#EEF2F7',
        'input': '#F8F9FB'
      }
    },
    plugins: [],
  }
}  