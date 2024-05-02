// import { defineI18nConfig } from "nuxt-i18n";

import en from "./i18n/en.js";
import es from "./i18n/es.js";

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "es",
  messages: {
    en,
    es,
  },
}));
