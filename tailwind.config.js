/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  theme: {
    extend: {
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      fontFamily: {
        poppins: ['"poppins"', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        'sm':{'max': '640px'},
        // => @media (max-width: 400px) { ... }

        'md':{'max': '768px'},
        // => @media (max-width: 768px) { ... }
  
        'lg':{'max': '1024px'},
        // => @media (max-width: 1024px) { ... }
  
        'xl':{'max':'1280px'},
        // => @media (maax-width: 1280px) { ... }
  
        '2xl':{'max': '1536px'},
        // => @media (max-width: 1536px) { ... }
      }
    }
  },
}
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  plugins: [require("tailwindcss-animate")],
  
}

