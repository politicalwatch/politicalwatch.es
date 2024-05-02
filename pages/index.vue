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

const { page } = await usePage();

useHead({
  title: "Home",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Home page",
    },
  ],
});
</script>
