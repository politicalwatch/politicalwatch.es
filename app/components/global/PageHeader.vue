<template>
  <header class="c-page-header">
    <component
      :is="type"
      class="c-page-header__title"
      :class="`c-page-header__title--${type}`"
    >
      {{ title }}
    </component>
    <div v-if="subtitle" class="c-page-header__subtitle">
      {{ subtitle }}
    </div>
    <img v-if="image" :src="image" :alt="title" class="c-page-header__image" />
  </header>
</template>

<script setup lang="ts">
const { title, subtitle, image, type } = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "h2",
    validator: (type) => ["h1", "h2"].includes(type),
  },
});
</script>

<style lang="scss" scoped>
.c-page-header {
  margin-bottom: gap(8);

  @media (min-width: $md) {
    position: relative;
  }

  &__title {
    @include th1;

    & {
      margin: 0 0 gap(2) 0;
    }

    @media (min-width: $md) {
      margin-bottom: gap(4);
    }

    &--h2 {
      @include th2;
    }
  }

  &__subtitle {
    @include subtitle;
  }

  &__image {
    display: none;

    @media (min-width: $md) {
      display: block;
      position: absolute;
      right: 0;
      transform: translateY(gap(8));
      bottom: 100%;
    }
  }
}
</style>
