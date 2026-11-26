<template>
  <main class="c-page is-dd">
    <DerechosDigitalesHero />
    <DerechosDigitalesIntro />
    <DerechosDigitalesThemesList />
    <DerechosDigitalesBanner />
    <DerechosDigitalesLogos />
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' });

const { t } = useI18n();

useSeoMeta({
  title: t('pages.derechosDigitales.title'),
  description: t('pages.derechosDigitales.description'),
});
</script>

<style lang="scss">
.c-dd-theme-modal::backdrop {
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  opacity: 0;
  transition:
    opacity 320ms ease,
    overlay 350ms allow-discrete,
    display 350ms allow-discrete;
}

.c-dd-theme-modal[open]::backdrop {
  opacity: 1;
}

@starting-style {
  .c-dd-theme-modal[open]::backdrop {
    opacity: 0;
  }
}

main.is-dd + .c-newsletter {
  margin-top: 0;
}
</style>

