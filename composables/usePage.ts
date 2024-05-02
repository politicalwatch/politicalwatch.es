export const usePage = async () => {
  let teamMembers = ref([]);
  let projects = ref([]);
  let research = ref([]);

  const route = useRoute();

  const { locale } = useI18n();

  const queryPath = `${locale.value == "es" ? locale.value : ""}${route.path}`;

  const { data: page, error } = await useAsyncData(queryPath, () =>
    queryContent(queryPath).findOne()
  );

  if (!page) {
    return { error };
  }

  return { page };
};
