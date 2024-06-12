import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
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
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Political Watch",
      titleTemplate: "%s | Political Watch",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content:
            "transparencia, rendición de cuentas, desarrollo sostenible, innovación social, política, coherencia de políticas, agenda 2030, ods, empresa y derechos humanos",
        },
        {
          property: "og:title",
          hid: "og:title",
          content: "Political Watch",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${import.meta.env.NUXT_PUBLIC_BASE_URL}/politicalwatch.jpg`,
        },
        {
          property: "twitter:title",
          hid: "twitter:title",
          content: "Political Watch",
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: `${import.meta.env.NUXT_PUBLIC_BASE_URL}/politicalwatch.jpg`,
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      script: [
        {
          src: "/scripts/metricool.js",
          type: "text/javascript",
        },
      ],
    },
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
  content: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
      },
      {
        code: "es",
        iso: "es",
        name: "Español",
        isCatchallLocale: true,
      },
    ],
    defaultLocale: "es",
    detectBrowserLanguage: false,
    baseUrl: import.meta.env.NUXT_PUBLIC_BASE_URL,
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
    url: import.meta.env.NUXT_PUBLIC_BASE_URL,
  },
});
