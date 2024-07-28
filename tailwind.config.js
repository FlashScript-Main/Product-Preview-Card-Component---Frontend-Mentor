/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter var", sans-serif'],
      },
      colors: {
        // body
          // 'body-bg-dark': '#0f172a',
          // 'body-bg-light': '#f1f5f9',

        // button
          // 'btn-bg-1': '#4D96A9',
          // 'btn-bg-2': '#855FB1',

        // text
          // 'main-text-h1-light': '#0f172a',
          // 'main-text-h1-dark': '#ffffff',
          // 'main-title': 'rgba(56,189,248,1)',
        
        // card
          // 'nav-card-bg-dark': '#173a55',
          // 'nav-card-text-dark': '#13b1f8',
          // 'nav-card-bg-light': '#d7f2fe',
          // 'nav-card-text-light': '#0f89ca',
      },
      screens: {
        // @media (min-width: ...) {}
          'xs': '475px',  // => @media (min-width: 475px) { ... }
        
        // @media (max-width: ...) {}
          // 'max-screen-xs': {'max': '425px'}, // => @media (max-width: 425px) { ... }
      },
    },
  },
  plugins: [],
}