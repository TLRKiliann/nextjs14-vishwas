import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0px 0px 10px rgba(0, 0, 0, 0.5)',
        '2xl': '0px 0px 20px rgba(0, 0, 0, 1)',
        '3xl': '0px 0px 30px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}
export default config
