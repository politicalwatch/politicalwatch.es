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
    <ContentRenderer :value="page" v-if="page" />
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const { t } = useI18n();
const { page } = await usePage();

useSeoMeta({
  title: page.value?.title,
  description: page.value?.subtitle,
});
</script>
