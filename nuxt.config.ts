export default defineNuxtConfig({
  devtools: { enabled: true },
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
    locales: [
      {
        code: 'ru',
        file: 'ru/ru.ts',
        name: 'Русский'
      },
      {
        code: 'pl',
        file: 'pl/pl.ts',
        name: 'Polski'
      },
      {
        code: 'en',
        file: 'en/en.ts',
        name: 'English'
      }
    ],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      // fallbackLocale: 'en', // optional
      alwaysRedirect: false,
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
      title: 'Evola E-bicycles', // Set the page title
      link: [
        { rel: 'icon', type: 'image/png', href: '/evola1.png' }, // Set the favicon
      ],
      meta: [
        { name: 'google-site-verification', content: 'OjyVwoCIZV8NVzGNM5kQGwwk1GJRU3Wul9mJTOiIPx8' }
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
  compatibilityDate: '2025-02-21',

});