export const usePage = async () => {
  const route = useRoute();
  const { locale } = useI18n();

  let queryPath: string | string[] = route.params.slug ?? "home";

  if (Array.isArray(queryPath)) {
    queryPath = queryPath.join("/");
  }

  const { data: page, error } = await useAsyncData(queryPath, () =>
    queryContent(queryPath).locale(locale.value).findOne()
  );

  if (!page) {
    return { error };
  }

  return { page };
};
