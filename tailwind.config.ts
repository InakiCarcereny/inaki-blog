import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        borderAnimation: {
          '0%': { borderColor: '#ffffff10a' },
          '25%': { borderColor: '#ffffff5a' },
          '50%': { borderColor: '#ffffff4a' },
          '75%': { borderColor: '#ffffff3a' },
          '100%': { borderColor: '#ffffff2a' },
        },
        rotateBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        border: 'borderAnimation 3s infinite',
        rotate: 'rotateBorder 3s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
