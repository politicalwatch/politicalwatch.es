<template>
  <main class="c-page is-home">
    <ContentRenderer :value="page" v-if="page">
      <ContentRendererMarkdown :value="page" />
    </ContentRenderer>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const { t } = useI18n();
const { page } = await usePage();

useHead({
  title: t("pages.home.title"),
  meta: [
    {
      name: "description",
      content: t("pages.home.description"),
    },
    {
      hid: "og:description",
      property: "og:description",
      content: t("pages.home.description"),
    },
    {
      property: "og:title",
      hid: "og:title",
      content: `${t("pages.home.title")} | Political Watch`,
    },
    {
      hid: "twitter:description",
      property: "twitter:description",
      content: t("pages.home.description"),
    },
    {
      property: "twitter:title",
      hid: "twitter:title",
      content: `${t("pages.home.title")} | Political Watch`,
    },
  ],
});
</script>
