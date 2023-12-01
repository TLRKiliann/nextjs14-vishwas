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
        }
      },
      animation: {
        "slice-appear": "sliceappear 0.4s ease-in-out 1",
        "up-start": "upstart 0.4s ease-in-out 1",
      },
      dropShadow: {
        'lg': '2px 2px 1px rgba(0, 0, 0, 0.4)',
        'lgwhite': '2px 2px 1px rgba(255, 255, 255, 1)',
      },
      boxShadow: {
        'btn': '0px 0px 7px rgba(40, 40, 40, 0.8)',
        'out': '0px 0px 10px rgba(0, 0, 0, 0.8)',
        'in': 'inset 0px 0px 10px rgba(0, 0, 0, 1)',
        'inlight': 'inset 0px 0px 10px rgba(0, 0, 0, 0.5)',
        'xl': '0px 0px 10px rgba(0, 0, 0, 1)',
        'xllight': '0px 0px 10px rgba(0, 0, 0, 0.5)',
        '2xl': '0px 0px 20px rgba(0, 0, 0, 1)',
        '3xl': '0px 0px 30px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config;
