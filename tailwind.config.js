/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-teal': '#00373e',
        'olive': '#94954c',
        'sandstone': '#ac9e88',
        'mint-cream': '#cafff2',
        'pearl': '#f8f6f5',
        'peach': '#fbad9c',
        'transparent-color': 'rgba(0,0,0,0)',
        'coral': '#fbd3b6',
      },
      fontFamily: {
        'secondary-font': 'Playfaire Display',
      }
    },
  },
  plugins: [],
}
