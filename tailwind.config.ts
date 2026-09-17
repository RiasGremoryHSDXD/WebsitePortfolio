import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    spacing: {
      '0': '0px',
      '1': '8px',
      '2': '16px',
      '3': '24px',
      '4': '32px',
      '5': '40px',
      '6': '48px',
      '8': '64px',
      '10': '80px',
      '12': '96px',
      '16': '128px',
      '20': '160px',
    },
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ededed',
        primary: '#38bdf8',
        muted: '#737373',
        border: '#262626',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
