/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'height': '36rem',
        'heights': '64rem',
        'bheight': '1px'
      },
      width: {
        'width': '20px',
      },
      spacing: {
        'top': '22rem',
        'marginb': '30rem',
      }
    },
  },
  plugins: [],
}

