/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './storyblok/**/*.{html,js,ts,vue}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:     '#080e1a',
          card:   '#0d1626',
          accent: '#f05b04',
          bright: '#ff6b1a',
        }
      },
      boxShadow: {
        'glow-sm': '0 0 16px rgba(240,91,4,0.18)',
        'glow':    '0 0 30px rgba(240,91,4,0.22)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')]
}

