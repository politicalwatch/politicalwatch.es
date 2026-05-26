<template>
  <section class="c-dd-banner">
    <div class="c-dd-banner__wrapper o-container">
      <p class="c-dd-banner__text">
        {{ t('pages.derechosDigitales.bannerText1') }}<br />
        {{ t('pages.derechosDigitales.bannerText2') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

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

  @media (min-width: $md) {
    padding: gap(6) 0;
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
