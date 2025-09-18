<template>
  <section
    class="c-banner"
    :style="`background-image: url(${bg})`"
    :class="{ 'c-banner--blank': !bg }"
  >
    <div class="o-container c-banner__wrapper">
      <h3 class="c-banner__title">
        {{ title }}
      </h3>
      <div class="c-banner__desc">
        {{ description }}
      </div>
      <a v-if="link" :href="link" class="c-button c-banner__more">{{
        button
      }}</a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { title, description, button, link, bg } = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  button: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  bg: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.c-banner {
  padding: gap(6) 0;
  color: $white;
  text-align: center;

  @media (min-width: $md) {
    padding: gap(8) 0;
  }

  &__title {
    font-size: rem(32px);
    font-weight: bold;
    line-height: 1.25;
    margin: 0 0 gap(2) 0;

    @media (min-width: $md) {
      font-size: rem(48px);
    }
  }

  &__desc {
    margin-bottom: gap(4);
  }

  &--blank {
    color: $brand;

    .c-banner {
      &__wrapper {
        position: relative;
        padding-bottom: gap(6);

        @media (min-width: $md) {
          padding-bottom: gap(8);
        }

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: calc(100% - #{gap(8)});
          left: gap(4);
        }
      }
    }
  }
}
</style>
