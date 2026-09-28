import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'fieldnote': {
          'cream': '#FBFAF3',       // background #FAF8F3 approx
          'dark-green': '#18342B',  // title color rgb(24,52,43)
          'mid-green': '#627059',   // eyebrow color rgb(98,116,90)
          'body-green': '#666F69',  // description color rgb(102,112,105)
          'feature-dark': '#1D2521', // feature name color rgb(29,37,33)
          'border': '#D7D5CA',      // feature border color rgb(215,213,202)
        }
      },
      letterSpacing: {
        'widest-custom': '1.8px',
      }
    },
  },
  plugins: [],
}
export default config
