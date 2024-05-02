import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: "https://politicalwatch.es/",
    },
  },
  routeRules: {
    "/covid-19": {
      redirect: { to: "/blog/un-año-covidwatch", statusCode: 301 },
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in", // default
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxtjs/sitemap",
    "nuxt-gtag",
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
  gtag: {
    enabled: false,
    initCommands: [
      // Setup up consent mode
      [
        "consent",
        "default",
        {
          ad_user_data: "denied",
          ad_personalization: "denied",
          ad_storage: "denied",
          analytics_storage: "denied",
          wait_for_update: 500,
        },
      ],
    ],
  },
  css: ["~/assets/css/main.scss"],
  site: {
    hostname: process.env.BASE_URL,
    gzip: true,
  },
});
