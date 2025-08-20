<template>
  <section class="c-hero">
    <div class="c-hero__wrapper">
      <div class="c-hero__content">
        <h1 class="c-hero__title">
          {{ t("blocks.hero.title") }}
          <span>{{ t("blocks.hero.title1") }}</span>
          <span>{{ t("blocks.hero.title2") }}</span>
        </h1>
        <!--
        <h2 class="c-hero__subtitle">
          {{ t("blocks.hero.subtitle1") }}
          <span>{{ t("blocks.hero.subtitle2") }}</span>
        </h2>
        -->
      </div>
      <img
        src="@/assets/images/hero.svg?url"
        alt="Political Watch"
        class="c-hero__image"
        width="500"
        height="auto"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
