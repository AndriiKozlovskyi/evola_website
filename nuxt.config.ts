export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: {
    compressPublicAssets: true,
  },
  routeRules: {
    '/rent': { redirect: { to: '/', statusCode: 301 } },
    '/en/rent': { redirect: { to: '/en', statusCode: 301 } },
    '/pl/rent': { redirect: { to: '/pl', statusCode: 301 } },
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    },
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  i18n: {
    baseUrl: 'https://evola-bikes.com',
    locales: [
      {
        code: 'ru',
        file: 'ru/ru.ts',
        name: 'Русский',
        language: 'ru-RU'
      },
      {
        code: 'pl',
        file: 'pl/pl.ts',
        name: 'Polski',
        language: 'pl-PL'
      },
      {
        code: 'en',
        file: 'en/en.ts',
        name: 'English',
        language: 'en-US'
      }
    ],
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  },
  runtimeConfig: {
    public: {
      i18n: {
        experimental: {
          jsTsFormatResource: true
        }
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@storyblok/nuxt',
      {
        accessToken: 'E4OKfXbcKctTQs3gxpQCxgtt',
        apiOptions: {
          region: 'eu' // or 'us' depending on your Storyblok space region
        },
        useApiClient: true,
        enableSudoMode: false // D
      },
    ],
    '@nuxtjs/i18n',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  app: {
    head: {
      titleTemplate: '%s',
      title: 'EVOLA',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'theme-color', content: '#d35400' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'EVOLA' },
        { property: 'og:image', content: 'https://evola-bikes.com/assets/bic.webp' },
        { property: 'og:url', content: 'https://evola-bikes.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://evola-bikes.com/assets/bic.webp' },
        { name: 'google-site-verification', content: 'KcLmVDC3N39Va81b0fzPIAXqIM8RhhGlxUYuTX9a2rk' }
      ],
      script: [],
    },
  },
  devServer: {
    https: {
      key: './certs/localhost-key.pem',
      cert: './certs/localhost.pem',
    },
  },
  compatibilityDate: '2025-02-21',
  plugins: [
    '~/plugins/image-optimization'
  ]
});