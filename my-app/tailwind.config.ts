/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        sliceappear: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        upstart: {
          '0%': { 
            transform: 'translateY(200px)',
            opacity: "0"
          },
          '100%': { 
            transform: 'translateY(0px)',
            opacity: "1"
          }
        },
        scaledecks: {
          from: {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",     
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",     
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",     
          },
          "65%": {
            transform: "scale3d(0.95, 1.05, 1)",     
          },
          "75%": {
            transform: "scale3d(1.05, 0.95, 1)",     
          },
          to: {
            transform: "scale3d(1, 1, 1)",
          }
        },
        decksrotation: {
          "0%": {
            transform: "rotate3d(0,0,0, 0deg)",
          },
          "100%": {
            transform: "rotate3d(-3, 0, 3, 540deg)",
          },
        },
        horizontalrotation: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(360deg)",
          },
        },
        verticalrotation: {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "100%": {
            transform: "rotateX(360deg)",
          },
        },
      },
      animation: {
        "slice-appear": "sliceappear 0.5s ease-out 1",
        "up-start": "upstart 0.4s ease-in-out 1",
        "scale-decks": "scaledecks 1s infinite",
        "decks-rotation": "decksrotation 1s ease 1",
        "horizontal-rotation": "horizontalrotation 1s ease 1",
        "vertical-rotation": "verticalrotation 1s ease 1",
      },
      dropShadow: {
        'lg': '2px 2px 1px rgba(0, 0, 0, 0.4)',
        'lgwhite': '2px 2px 1px rgba(255, 255, 255, 1)',
      },
      boxShadow: {
        'btn': '0px 0px 7px rgba(40, 40, 40, 0.8)',
        'out': '0px 0px 10px rgba(0, 0, 0, 0.8)',
        'in': 'inset 0px 0px 10px rgba(0, 0, 0, 1)',
        'inviolet': 'inset 0px 0px 10px rgba(147, 112, 219, 0.8)',
        'inlight': '0px 0px 7px rgba(2, 132, 199, 0.8)',
        'xllight': '0px 0px 10px rgba(0, 0, 0, 0.5)',
        'lg': '0px 0px 7px rgba(0, 0, 0, 0.5)',
        'md': '0px 0px 7px rgba(0, 0, 0, 0.5)',
        'xl': '0px 0px 20px rgba(0, 0, 0, 0.5)',
        '2xl': '0px 0px 20px rgba(0, 0, 0, 1)',
        '3xl': '0px 0px 30px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
    require("tailwindcss-3d")
  ],
  darkMode: 'class',
}
export default config;