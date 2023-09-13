import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'white-100': '#FFFFFF',
      'orange-100': '#FF8B64',
      'blue-100': '#55C2E6',
      'red-100': '#FF5E7D',
      'green-100': '#4BCF82',
      'yellow-100': '#F1C75B',
      'purple-100': '#BBC0FF',
      'purple-200': '#5747EA',
      'purple-300': '#1C204B',
      'purple-400': '#0E1323',
    },
    fontFamily: {},
    boxShadow: {},
    backgroundImage: {},
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
};
export default config;
