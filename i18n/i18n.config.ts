// import { defineI18nConfig } from "nuxt-i18n";

import en from "./locales/en.js";
import es from "./locales/es.js";

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "es",
  messages: {
    en,
    es,
  },
}));
