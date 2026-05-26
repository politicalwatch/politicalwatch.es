<template>
  <article
    :id="`theme-${theme.order}`"
    class="c-dd-theme-card"
    :class="{
      'c-dd-theme-card--alt': index % 2 === 0,
      'c-dd-theme-card--reverse': index % 2 !== 0,
    }"
  >
    <div class="o-container c-dd-theme-card__inner">
      <div class="c-dd-theme-card__content">
        <h2 class="c-dd-theme-card__title">{{ theme.title }}</h2>
        <div class="c-dd-theme-card__divider" />
        <p class="c-dd-theme-card__summary">{{ theme.summary }}</p>
        <button class="c-dd-theme-card__link" @click="emit('open', theme)">
          {{ t('pages.derechosDigitales.readMore') }} →
        </button>
      </div>

      <div class="c-dd-theme-card__image-wrap">
        <NuxtImg
          :src="theme.image || '/images/landing-derechos-digitales/congreso.jpg'"
          :alt="theme.title"
          class="c-dd-theme-card__image"
          sizes="100vw md:50vw"
          loading="lazy"
          fit="cover"
        />
        <img
          v-if="theme.iconOutline"
          :src="theme.iconOutline"
          alt=""
          aria-hidden="true"
          class="c-dd-theme-card__icon"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  theme: Record<string, any>;
  index: number;
}>();

const emit = defineEmits<{
  open: [theme: Record<string, any>];
}>();
</script>

<style lang="scss" scoped>
.c-dd-theme-card {
  padding: gap(8) 0;

  &--alt {
    background: #f2f2f2;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: gap(4);

    @media (min-width: $md) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 0;
    }
  }

  &--reverse &__inner {
    @media (min-width: $md) {
      .c-dd-theme-card__image-wrap {
        order: -1;
      }
    }
  }

  &__image-wrap {
    position: relative;
    padding: gap(2);

    @media (min-width: $md) {
      padding: gap(4);
    }
  }

  &__image {
    width: 100%;
    aspect-ratio: 604 / 575;
    object-fit: cover;
    border-radius: rem(16px);
    display: block;
  }

  &__icon {
    position: absolute;
    top: gap(2);
    right: gap(2);
    transform: translate(50%, -50%);
    width: 80px;
    height: 80px;
    object-fit: contain;
    pointer-events: none;

    @media (min-width: $md) {
      width: 100px;
      height: 100px;
      top: gap(4);
      right: gap(4);
    }
  }

  &--reverse &__icon {
    right: auto;
    left: gap(2);
    transform: translate(-50%, -50%);

    @media (min-width: $md) {
      left: gap(4);
    }
  }

  &__content {
    padding: gap(2) gap(2);
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: $md) {
      padding: gap(6) gap(8);
    }
  }

  &__title {
    font-family: $font-primary;
    font-size: rem(32px);
    font-weight: 300;
    line-height: 1.2;
    color: $brand;
    margin: 0 0 gap(3) 0;

    @media (min-width: $md) {
      font-size: rem(40px);
    }
  }

  &__divider {
    height: 6px;
    width: 100%;
    background: linear-gradient(90deg, $dd-gradient-from 0%, $dd-gradient-via 33%, $dd-gradient-via-2 66%, $dd-gradient-to 100%);
    margin: 0 0 gap(4) 0;
    border: none;
  }

  &__summary {
    font-family: $font-primary;
    font-size: rem(15px);
    line-height: 1.73;
    color: $medium;
    margin: 0 0 gap(5) 0;

    @media (min-width: $md) {
      font-size: rem(16px);
    }
  }

  &__link {
    @include basic-transition(color);

    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: $font-primary;
    font-size: rem(14px);
    font-weight: 700;
    color: $primary;
    text-align: left;
    letter-spacing: 0.02em;

    &:hover {
      color: color.adjust($primary, $lightness: -10%);
    }
  }
}
</style>
