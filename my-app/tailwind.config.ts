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
            opacity: "0.5"
          },
          "100%": {
            opacity: "1"
          }
        }
      },
      animation: {
        "slice-appear": "sliceappear 0.4s ease-in-out 1",
      },
      dropShadow: {
        'lg': '2px 2px 1px rgba(0, 0, 0, 0.4)',
      },
      boxShadow: {
        'out': '0px 0px 10px rgba(0, 0, 0, 0.8)',
        'in': 'inset 0px 0px 10px rgba(0, 0, 0, 1)',
        'xl': '0px 0px 10px rgba(0, 0, 0, 0.5)',
        '2xl': '0px 0px 20px rgba(0, 0, 0, 1)',
        '3xl': '0px 0px 30px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}
export default config
