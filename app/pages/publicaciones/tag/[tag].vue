<template>
  <research :title="t('pages.research.title')" :tag="tag" title-type="h1" />
</template>

<script setup lang="ts">
const route = useRoute();
const { t, te } = useI18n();

const tag = route.params.tag;

useSeoMeta({
  title: t("pages.research.title"),
  description: te("pages.research.description") ? t("pages.research.description") : t("pages.research.title"),
});
</script>
