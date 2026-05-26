<template>
  <NuxtLinkLocale
    v-if="slug"
    :to="`/publicaciones/${slug}`"
    class="c-dd-related-report c-dd-related-report--linked"
  >
    <h5 class="c-dd-related-report__title">{{ title }}</h5>
    <p v-if="description" class="c-dd-related-report__desc">{{ description }}</p>
    <hr class="c-dd-related-report__divider" />
    <p v-if="conclusion" class="c-dd-related-report__conclusion">{{ conclusion }}</p>
  </NuxtLinkLocale>
  <div v-else class="c-dd-related-report">
    <h5 class="c-dd-related-report__title">{{ title }}</h5>
    <p v-if="description" class="c-dd-related-report__desc">{{ description }}</p>
    <hr class="c-dd-related-report__divider" />
    <p v-if="conclusion" class="c-dd-related-report__conclusion">{{ conclusion }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  conclusion?: string;
  slug?: string;
}>();
</script>

<style lang="scss" scoped>
.c-dd-related-report {
  @include basic-transition(transform);

  position: relative;
  isolation: isolate;
  border-radius: 8px;
  padding: gap(4);
  margin-bottom: calc(#{gap(4)} + 5px);
  text-decoration: none;
  display: block;

  &--linked:hover {
    transform: scale(1.02);

    &::after {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 5px -5px -5px 5px;
    background: linear-gradient(0deg, $dd-gradient-from 0%, $dd-gradient-via 33%, $dd-gradient-via-2 66%, $dd-gradient-to 100%);
    border-radius: 8px;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: $white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    transition: box-shadow 0.2s ease;
    z-index: -1;
  }

  &__title {
    font-family: $font-secondary;
    font-size: rem(14px);
    font-weight: 700;
    line-height: 1.4;
    color: $brand;
    margin: 0 0 gap(2) 0;
  }

  &__desc {
    font-family: $font-primary;
    font-size: rem(13px);
    line-height: 1.65;
    color: $medium;
    margin: 0;
  }

  &__divider {
    border: none;
    border-top: 1px solid #ed1652;
    margin: gap(3) 0;
  }

  &__conclusion {
    font-family: $font-primary;
    font-size: rem(13px);
    font-weight: 700;
    line-height: 1.5;
    color: $primary;
    margin: 0;
  }
}
</style>
