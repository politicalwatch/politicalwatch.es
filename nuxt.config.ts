import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  compatibilityDate: "2024-07-05",
  runtimeConfig: {
    public: {
      baseURL: "https://politicalwatch.es/",
    },
  },
  routeRules: {
    "/covid-19": {
      redirect: { to: "/blog/un-ano-covidwatch", statusCode: 301 },
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
          name: "keywords",
          content:
            "transparencia, rendición de cuentas, desarrollo sostenible, innovación social, política, coherencia de políticas, agenda 2030, ods, empresa y derechos humanos",
        },
        {
          property: "og:site_name",
          content: "Political Watch",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Political Watch",
        },
        {
          property: "og:image",
          content: `${import.meta.env.NUXT_PUBLIC_BASE_URL}/politicalwatch.jpg`,
        },
        {
          property: "twitter:title",
          content: "Political Watch",
        },
        {
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
    "@nuxt/image",
    "@netlify/nuxt",
  ],
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["import"],
          additionalData: `
            @import "~/assets/css/01-settings/_settings.animations.scss";
            @import "~/assets/css/01-settings/_settings.breakpoints.scss";
            @import "~/assets/css/01-settings/_settings.colors.scss";
            @import "~/assets/css/01-settings/_settings.spacing.scss";
            @import "~/assets/css/01-settings/_settings.typography.scss";
            @import "~/assets/css/02-tools/_tools.animations.scss";
            @import "~/assets/css/02-tools/_tools.hidden.scss";
            @import "~/assets/css/02-tools/_tools.layout.scss";
            @import "~/assets/css/02-tools/_tools.on-event.scss";
            @import "~/assets/css/02-tools/_tools.spacing.scss";
            @import "~/assets/css/02-tools/_tools.text.scss";
          `,
        },
      },
    },
  },
  image: {
    quality: 70,
    format: ["webp", "jpeg", "jpg", "png"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  // Content v3 configuration is now in content.config.ts
  i18n: {
    locales: [
      {
        code: "en",
        language: "en",
        name: "English",
        file: "en.js",
      },
      {
        code: "es",
        language: "es",
        name: "Español",
        isCatchallLocale: true,
        file: "es.js",
      },
    ],
    strategy: 'prefix_and_default',
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
    initMode: "manual",
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
