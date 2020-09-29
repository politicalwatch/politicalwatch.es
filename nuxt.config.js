import en from './lang/en-US.js'
import es from './lang/es-ES.js'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'politicalwatch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n'
  ],

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      }, {
        code: 'es',
        iso: 'en-ES',
        name: 'Español'
      }
    ],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        en,
        es
      }
    }
  },

  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
