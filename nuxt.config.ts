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
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@storyblok/nuxt',
      {
        accessToken: 'E4OKfXbcKctTQs3gxpQCxgtt',
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
  }
});