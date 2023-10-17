import en from './lang/en-US.js'
import es from './lang/es-ES.js'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Political Watch',
    titleTemplate: '%s | Political Watch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'transparencia, rendición de cuentas, desarrollo sostenible, innovación social, política, coherencia de políticas, agenda 2030, ods, empresa y derechos humanos'
      },
      {
        property: 'og:title',
        hid: 'og:title',
        content: 'Political Watch'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/politicalwatch.jpg`
      },
      {
        property: 'twitter:title',
        hid: 'twitter:title',
        content: 'Political Watch'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: `${process.env.BASE_URL}/politicalwatch.jpg`
      }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: [
      {
        src: '/scripts/metricool.js',
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/filters.js',
    {
      src: '~plugins/googleAnalytics.js',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-webfontloader',
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true
  },

  webfontloader: {
    google: {
      families: ['Montserrat:300,800,900&display=swap', 'Roboto&display=swap']
    }
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'es',
        iso: 'en-ES',
        name: 'Español'
      }
    ],
    defaultLocale: 'es',
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        en,
        es
      }
    }
  },

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    liveEdit: false,
    markdown: {
      // remarkPlugins: ['remark-attr']
    }
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
