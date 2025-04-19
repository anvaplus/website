/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // This enables the class-based dark mode
  theme: {
    extend: {
      colors: {
        // You can customize your color palette here
      },
      fontFamily: {
        // Custom font families can be defined here
      },
    },
  },
  plugins: [],
}
