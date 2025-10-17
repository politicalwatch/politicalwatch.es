export const usePage = async () => {
  const route = useRoute();
  const { locale } = useI18n();

  let queryPath: string | string[] = route.params.slug ?? "home";

  if (Array.isArray(queryPath)) {
    queryPath = queryPath.join("/");
  }

  // Content files are always stored with locale prefix (content/es/, content/en/)
  // So the database path always includes the locale, regardless of URL structure
  const fullPath = `/${locale.value}/${queryPath}`;

  const { data: page, error } = await useAsyncData(`${queryPath}-${locale.value}`, () =>
    queryCollection('pages').path(fullPath).first()
  );

  if (!page) {
    return { error };
  }

  return { page };
};
