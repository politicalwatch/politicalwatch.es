<template>
  <Research title-type="h1" :filters="tags" />
</template>

<script setup lang="ts">
const { t, te } = useI18n();
const routeLocale = useRouteLocale();
const researchCollection = `research_${routeLocale}` as 'research_es' | 'research_en';

const { data: research } = await useAsyncData(`research-${routeLocale}`, () =>
  queryCollection(researchCollection).all()
);

const tags = computed(() => {
  const tags = new Set(research.value?.map((item) => item.tags).flat().sort());
  return [...tags];
});

useSeoMeta({
  title: t("pages.research.title"),
  description: te("pages.research.description") ? t("pages.research.description") : t("pages.research.title"),
});
</script>
