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
});
</script>
