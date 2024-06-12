<template>
  <main class="c-page">
    <div class="o-container">
      <page-header
        :title="page?.title"
        :subtitle="page?.subtitle"
        :image="page?.image"
        type="h1"
      />
    </div>
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
  title: page?.value?.title,
  meta: [
    {
      name: "description",
      content: page?.value?.subtitle,
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
