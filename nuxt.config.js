const title = 'Кибербиатлон 2020'
const shortName = 'Кибербиатлон'
const description =
  'Кибербиатлон 2020 — командные соревнования школьников по защите информации. В рамках соревнования командам учащимся из разных учебных заведений предстоит решить задания по криптографии, стеганографии, уязвимости веб-приложений и прочим аспектам компьютерной и информационной безопасности.'

export default {
  target: 'static',
  ssr: true,
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Кибербиатлон 2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#de5144' },
      {
        hid: 'description',
        name: 'description',
        content: description
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'mask-icon', color: '#de5144', href: '/safari-pinned-tab.svg' },
      { rel: 'dns-prefetch', href: '//www.googletagmanager.com/' },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com/' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@900&text=D.1&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#de5144' },
  loadingIndicator: {
    name: 'cube-grid',
    color: '#de5144',
    background: '#ffffff'
  },

  pwa: {
    meta: {
      favicon: false,
      name: title,
      description,
      ogSiteName: shortName,
      ogImage: '/site_card_en.png',
      twitterCreator: 'devolt_one'
    },
    manifest: {
      name: title,
      shortName,
      description
    }
  },

  /*
   ** Global CSS
   */
  css: [
    '~assets/css/style.scss',
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/masonry', mode: 'client', ssr: false },
    { src: '~/plugins/slick-slide.js', mode: 'client', ssr: false },
    { src: '~/plugins/slick', mode: 'client', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-trailingslash-module',
    'nuxt-fontawesome'
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  gtm: {
    dev: false,
    id: process.env.GTM_ID || 'GTM-XXXXXXX'
  },

  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID || 'UA-XXXXXXXX-X',
    GTM_ID: process.env.GTM_ID || 'GTM-XXXXXXX'
  },

  robots: {
    sitemap: (process.env.URL || 'http://localhost:3000') + '/sitemap.xml'
  },

  sitemap: {
    hostname: process.env.URL || 'http://localhost:3000'
  },

  /*
   ** Customize the base url
   */
  router: {
    // base: process.env.CI_PAGES_URL && new URL(process.env.CI_PAGES_URL).pathname
  },

  /*
   ** Customize the generated output folder
   */
  generate: {
    dir: 'public'
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: ['jquery', 'bootstrap', 'masonry-layout', 'imagesloaded'],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
