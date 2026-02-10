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
const config = useRuntimeConfig();
const route = useRoute();
const { page } = await usePage();

useHead({
  title: page?.value?.title,
  meta: [
    {
      name: "description",
      content: page?.value?.subtitle,
    },
    {
      property: "og:description",
      content: page?.value?.subtitle,
    },
    {
      property: "og:title",
      content: `${page?.value?.title} | Political Watch`,
    },
    {
      property: "og:url",
      content: `${config.public.baseURL}${route.path}`,
    },
    {
      property: "twitter:description",
      content: page?.value?.subtitle,
    },
    {
      property: "twitter:title",
      content: `${page?.value?.title} | Political Watch`,
    },
  ],
});
</script>
