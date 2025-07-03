export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // for React/Vite/Next
    "./public/index.html"              // optional if you use plain HTML
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #2563EB 0%, #A855F7 100%)',
        'hero-gredient': "url('images/texture.png'), linear-gradient(78.68deg, #CFEAF8 -55.27%, #FFFFFF 38.65%, #DBEAFE 138.95%)"
      },
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
      }
    },
  },
  plugins: [],
}

