<template>
  <NuxtLoadingIndicator :height="5" color="#e50047" />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n();
const onBeforeEnter = async () => {
  await finalizePendingLocaleChange();
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
