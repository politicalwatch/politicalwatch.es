<template>
  <main class="c-page is-dd">
    <DerechosDigitalesHero />
    <DerechosDigitalesIntro />
    <DerechosDigitalesBanner />

  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' });

const { t } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();

useHead({
  title: t('pages.derechosDigitales.title'),
  meta: [
    { name: 'description', content: t('pages.derechosDigitales.description') },
    { property: 'og:description', content: t('pages.derechosDigitales.description') },
    { property: 'og:title', content: t('pages.derechosDigitales.title') },
    { property: 'og:url', content: `${config.public.baseURL}${route.path}` },
  ],
});
</script>

<style lang="scss">
.c-dd-theme-modal::backdrop {
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
}

main.is-dd + .c-newsletter {
  margin-top: 0;
}
</style>

