<template>
  <research :title="t('pages.research.title')" :tag="tag" title-type="h1" />
</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const { t, te, locale } = useI18n();

const tag = route.params.tag;

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
