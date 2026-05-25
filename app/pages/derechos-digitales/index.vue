<template>
  <main class="c-page is-dd">
    <DerechosDigitalesIntro />
    <section class="c-dd-banner">
      <div class="c-dd-banner__wrapper o-container">
        <p class="c-dd-banner__text">
          {{ t('pages.derechosDigitales.bannerText1') }}<br />
          {{ t('pages.derechosDigitales.bannerText2') }}
        </p>
      </div>
    </section>

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

<style lang="scss" scoped>
.c-dd-banner {
  background: linear-gradient(
    to right,
    $dd-gradient-from 0%,
    $dd-gradient-via 33%,
    $dd-gradient-via-2 66%,
    $dd-gradient-to 100%
  );
  padding: gap(5) 0;
  margin-top: gap(8);

  @media (min-width: $md) {
    padding: gap(6) 0;
    margin-top: gap(12);
  }

  &__wrapper {
    text-align: center;
  }

  &__text {
    font-family: $font-primary;
    font-size: rem(18px);
    font-weight: 500;
    line-height: 1.6;
    color: $white;
    margin: 0;
    margin-inline: auto;

    @media (min-width: $md) {
      font-size: rem(24px);
    }
  }
}
</style>
