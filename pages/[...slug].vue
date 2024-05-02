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

const { page } = await usePage();
</script>
