import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: "https://politicalwatch.es/",
    },
  },
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in", // default
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxtjs/sitemap",
  ],
  vite: {
    plugins: [svgLoader()],
  },
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "es",
        name: "Español",
      },
    ],
    defaultLocale: "es",
    detectBrowserLanguage: false,
  },
  googleFonts: {
    families: {
      Roboto: true,
      Montserrat: [300, 800, 900],
    },
  },
  css: ["~/assets/css/main.scss"],
  site: {
    hostname: process.env.BASE_URL,
    gzip: true,
  },
});
