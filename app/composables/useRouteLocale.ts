// Locale derived from the URL synchronously at setup time.
// Required because with skipSettingLocaleOnNavigate:true, useI18n().locale.value
// is stale during a new page's setup() — it only flips in onBeforeEnter — so any
// useAsyncData keyed off locale.value would fetch the previous locale's data.
// We read localeCodes/defaultLocale (static config) — never locale.value.
export const useRouteLocale = (): string => {
  const route = useRoute();
  const { localeCodes, defaultLocale } = useI18n();
  const first = route.path.split('/')[1] ?? '';
  return (localeCodes.value as string[]).includes(first) ? first : defaultLocale;
};
