import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f4',   // Lightest - barely pink
          100: '#fbe9e9',  // Very light pink
          200: '#f8d7d7',  // Light pink
          300: '#f1baba',  // Soft pink
          400: '#e8a6a6',  // Medium pink
          500: '#E19898',  // Base color - soft rose
          600: '#c77e7e',  // Darker rose
          700: '#a66868',  // Deep rose
          800: '#875454',  // Very dark rose
          900: '#6f4545',  // Almost brown
          950: '#3a2424',  // Darkest shade
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config;
