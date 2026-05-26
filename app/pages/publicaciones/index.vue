<template>
  <Research title-type="h1" :filters="tags" />
</template>

<script setup lang="ts">
const { t, te, locale } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();
const researchCollection = `research_${locale.value}` as 'research_es' | 'research_en';

const { data: research } = await useAsyncData("research", () =>
  queryCollection(researchCollection).all()
);

const tags = computed(() => {
  const tags = new Set(research.value?.map((item) => item.tags).flat().sort());
  return [...tags];
});

useHead({
  title: t("pages.research.title"),
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: "description",
      content: te("pages.research.description")
        ? t("pages.research.description")
        : t("pages.research.title"),
    },
    {
      property: "og:description",
      content: te("pages.research.description")
        ? t("pages.research.description")
        : t("pages.research.title"),
    },
    {
      property: "og:title",
      content: `${t("pages.research.title")} | Political Watch`,
    },
    {
      property: "og:url",
      content: `${config.public.baseURL}${route.path}`,
    },
    {
      property: "twitter:description",
      content: te("pages.research.description")
        ? t("pages.research.description")
        : t("pages.research.title"),
    },
    {
      property: "twitter:title",
      content: `${t("pages.research.title")} | Political Watch`,
    },
  ],
});
</script>
