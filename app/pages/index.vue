<template>
  <main class="c-page is-home">
    <ContentRenderer
      :value="page"
      :data="{ featuredItems: page?.meta?.featuredItems, alliances: page?.meta?.alliances }"
      v-if="page"
    />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const { t } = useI18n();
const { page } = await usePage();

useSeoMeta({
  title: t("pages.home.title"),
  description: t("pages.home.description"),
});
</script>
