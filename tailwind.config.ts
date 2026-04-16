import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        volvo: {
          blue: '#003da5',
          lightblue: '#1e5fa3',
          lightgray: '#f5f5f5',
        },
      },
    },
  },
  plugins: [],
}
export default config
