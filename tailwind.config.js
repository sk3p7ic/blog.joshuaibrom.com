/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Variable', 'sans-serif'],
        sourceCodePro: ['Source Code Pro Variable', 'monospace'],
        jura: ['Jura Variable', 'sans-serif'],
        bitter: ['Bitter Variable', 'serif'],
      }
    },
  },
  plugins: [],
}

