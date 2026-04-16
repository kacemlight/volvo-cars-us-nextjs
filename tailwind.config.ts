import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'volvo-blue': '#002D72', // Primary Volvo blue
        'volvo-lightblue': '#1a4d9f', // Hover state for buttons
        'volvo-lightgray': '#f5f5f5', // Light gray background
        'volvo-darkgray': '#333333', // Dark gray for text
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'pb-3/4': 'padding-bottom: 75%', // 4:3 aspect ratio for images
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
