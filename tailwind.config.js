// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Add any other directories where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};