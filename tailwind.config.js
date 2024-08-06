/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        'dynamic': 'repeat(auto-fit, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

