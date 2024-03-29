import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary': "#0C0C1D",
        'white': "#FFFFFF",
        'blue': "#4B73FF",
        'white-s': "#F7F9FB",
        'p-grey': '#e4e9ec'
      },
      textColor: {
        'primary': "#0C0C1D",
        'white': "#FFFFFF",
        'blue': "#4B73FF",
        'white-s': "#F7F9FB",
        'p-grey': '#e4e9ec'
      }
    },
  },
  plugins: [],
}
export default config
