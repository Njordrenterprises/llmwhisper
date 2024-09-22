/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      "light", "dark", "synthwave", "retro", "cyberpunk",
      "valentine", "halloween", "garden", "forest", "aqua",
       "black", "luxury",
      "dracula", "autumn", "business", "acid", "lemonade",
      "night", "coffee", "dim", "nord", "sunset"
    ],
  },
}
