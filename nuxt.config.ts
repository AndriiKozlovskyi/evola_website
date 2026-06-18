export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: {
    compressPublicAssets: true,
  },
  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    },
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
  components: {
    global: true,
    dirs: ['~/components']
  },
  i18n: {
    baseUrl: 'https://evola.pl',
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
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'ru'
      // If you want to use localStorage instead of cookies:
      // useLocalStorage: true,
      // localStorageKey: 'i18n_redirected',
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
      title: 'Аренда Велосипедов Вроцлав',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap'
        }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { 
          name: 'description', 
          content: 'Wynajem rowerow elektrycznych we Wroclawiu. Full suspension 30Ah za 250 zl tygodniowo, hardtail 30Ah za 220 zl i osobny wynajem baterii od 1 tygodnia.' 
        },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'theme-color', content: '#d35400' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Аренда Велосипедов Вроцлав' },
        { property: 'og:locale', content: 'pl_PL' },
        { property: 'og:title', content: 'Аренда Велосипедов Вроцлав' },
        {
          property: 'og:description',
          content: 'Wynajem rowerow elektrycznych i baterii we Wroclawiu z serwisem 2 razy w tygodniu w cenie.'
        },
        { property: 'og:image', content: 'https://evola.pl/assets/bic.webp' },
        { property: 'og:url', content: 'https://evola.pl' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Аренда Велосипедов Вроцлав' },
        {
          name: 'twitter:description',
          content: 'Wynajem rowerow elektrycznych i baterii we Wroclawiu z serwisem w cenie.'
        },
        { name: 'twitter:image', content: 'https://evola.pl/assets/bic.webp' },
        { name: 'google-site-verification', content: 'KcLmVDC3N39Va81b0fzPIAXqIM8RhhGlxUYuTX9a2rk' }
      ],
      script: [
        {
          hid: 'gtm-script',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MKB9FKVR');`,
          type: 'text/javascript'
        }
      ],
      noscript: [
        {
          hid: 'gtm-noscript',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKB9FKVR"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtm-script': ['innerHTML'],
        'gtm-noscript': ['innerHTML']
      }
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