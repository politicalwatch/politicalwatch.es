type LocalizedCollection = 'pages_es' | 'pages_en' | 'blog_es' | 'blog_en' | 'team_es' | 'team_en' | 'projects_es' | 'projects_en' | 'research_es' | 'research_en';

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

  // Use locale-specific collection
  const collectionName = `pages_${locale.value}` as LocalizedCollection;

  const { data: page, error } = await useAsyncData(`${queryPath}-${locale.value}`, () =>
    queryCollection(collectionName).path(fullPath).first()
  );

  if (!page) {
    return { error };
  }

  return { page };
};
