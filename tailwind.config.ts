import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'ghost-white': '#FCF8FF',
        'davys-grey': '#584D62',
        'eucaplyptus': '#44FFA1',
        'dark-purple': '#24053E',
      },
      fontFamily: {
        'manrope': 'Manrope',
        'fraunces': 'Fraunces',
      },
    },
  },
  plugins: [],
}
export default config
