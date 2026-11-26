import svgLoader from "vite-svg-loader";

// Public site URL (no trailing slash).
const siteUrl = (process.env.NUXT_PUBLIC_BASE_URL || "https://politicalwatch.es").replace(/\/$/, "");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  compatibilityDate: "2024-07-05",
  runtimeConfig: {
    public: {
      baseURL: siteUrl,
    },
  },
  routeRules: {
    "/covid-19": {
      redirect: { to: "/blog/un-ano-covidwatch", statusCode: 301 },
    },
    "/investigaciones": { redirect: { to: "/publicaciones", statusCode: 301 } },
    "/investigaciones/**": { redirect: { to: "/publicaciones/**", statusCode: 301 } },
    "/es/investigaciones": { redirect: { to: "/es/publicaciones", statusCode: 301 } },
    "/es/investigaciones/**": { redirect: { to: "/es/publicaciones/**", statusCode: 301 } },
    "/en/investigaciones": { redirect: { to: "/en/publicaciones", statusCode: 301 } },
    "/en/investigaciones/**": { redirect: { to: "/en/publicaciones/**", statusCode: 301 } },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      // Title template, canonical, og:url, og:site_name, og:locale and og/twitter
      // title+description come from @nuxtjs/seo (site config below).
      meta: [
        {
          name: "keywords",
          content:
            "transparencia, rendición de cuentas, desarrollo sostenible, innovación social, política, coherencia de políticas, agenda 2030, ods, empresa y derechos humanos",
        },
        // Default social card; pages with their own image override og:image.
        { property: "og:image", content: `${siteUrl}/politicalwatch.jpg` },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Political Watch" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      // apple-touch-icon.png in public/ is picked up by @nuxtjs/seo
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      script: [
        {
          src: "/scripts/metricool.js",
          type: "text/javascript",
        },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/i18n", "@nuxt/fonts", "@nuxtjs/seo", "nuxt-gtag", "@nuxt/image"],
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["import"],
          additionalData: `
            @use "sass:color";
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
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "es",
    },
    baseUrl: siteUrl,
    skipSettingLocaleOnNavigate: true,
  },
  fonts: {
    families: [
      { name: "Roboto", provider: "google", weights: ["300 900"], styles: ["normal", "italic"] },
      { name: "Montserrat", provider: "google", weights: ["300 900"], styles: ["normal", "italic"] },
      { name: "DM Serif Display", provider: "google", weights: [400], styles: ["normal", "italic"] },
    ],
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
  // @nuxtjs/seo: shared site identity for sitemap, robots, schema.org and meta defaults
  site: {
    url: siteUrl,
    name: "Political Watch",
  },
  ogImage: {
    // Static social card: public/politicalwatch.jpg
    enabled: false,
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Political Watch",
      url: siteUrl,
      logo: `${siteUrl}/apple-touch-icon.png`,
    },
  },
});