<template>
  <section class="c-hero">
    <div class="c-hero__wrapper">
      <div class="c-hero__content">
        <h1 class="c-hero__title" v-html="t('blocks.hero.title')" />
        <h2 class="c-hero__subtitle" v-html="t('blocks.hero.subtitle')" />
      </div>
      <img
        src="@/assets/images/hero.svg?url"
        alt="Political Watch"
        class="c-hero__image"
        width="640"
        height="482"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
