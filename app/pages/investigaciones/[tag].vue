<template>
  <research :title="t('pages.research.title')" :tag="tag" title-type="h1" />
</template>

<script setup lang="ts">
const route = useRoute();
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
      hid: "og:description",
      property: "og:description",
      content: te("pages.research.description")
        ? t("pages.research.description")
        : t("pages.research.title"),
    },
    {
      property: "og:title",
      hid: "og:title",
      content: `${t("pages.research.title")} | Political Watch`,
    },
    {
      hid: "twitter:description",
      property: "twitter:description",
      content: te("pages.research.description")
        ? t("pages.research.description")
        : t("pages.research.title"),
    },
    {
      property: "twitter:title",
      hid: "twitter:title",
      content: `${t("pages.research.title")} | Political Watch`,
    },
  ],
});
</script>
