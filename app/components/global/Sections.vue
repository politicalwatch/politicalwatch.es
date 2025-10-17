<template>
  <section class="c-sections o-section">
    <page-header v-if="title || subtitle" :title="title" :subtitle="subtitle" />
    <div class="c-sections__wrapper">
      <article
        v-for="(section, i) in sections"
        :key="i"
        class="c-sections__section"
      >
        <img
          :src="section.image"
          :alt="section.title"
          class="c-sections__section-img"
        />
        <h3 class="c-sections__section-title">
          {{ section.title }}
        </h3>
        <p class="c-sections__section-subtitle">
          {{ section.subtitle }}
        </p>
        <a :href="section.link" class="c-link">{{ section.button }}</a>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { title, subtitle, sections } = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  sections: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.c-sections {
  @include container;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-gap: gap(4);
  }

  &__section {
    text-align: center;
    margin-bottom: gap(6);

    &-img {
      display: block;
      margin: 0 auto gap(3) auto;

      @media (min-width: $md) {
        margin-bottom: gap(4);
      }
    }

    &-title {
      @include th3;

      & {
        margin: 0 0 gap(1) 0;
        text-transform: uppercase;
      }

      @media (min-width: $md) {
        font-size: rem(32px);
      }
    }

    &-subtitle {
      font-family: $font-secondary;
      font-weight: normal;
      margin: 0 0 gap(3) 0;
    }
  }
}
</style>
