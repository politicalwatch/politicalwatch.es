<template>
  <section class="c-dd-intro o-section">
    <div class="c-dd-intro__wrapper o-container">
      <div class="c-dd-intro__col-text">
        <p class="c-dd-intro__body">{{ t('pages.derechosDigitales.introBody') }}</p>
        <a href="#themes" class="c-dd-intro__cta">{{ t('pages.derechosDigitales.introCta') }}</a>
      </div>

      <ul class="c-dd-intro__list">
        <li v-for="theme in themes" :key="theme.path" class="c-dd-intro__list-item">
          <img :src="theme.iconFill" alt="" aria-hidden="true" width="32" height="32" />
          <span>{{ theme.title }}</span>
        </li>
      </ul>
    </div>

    <hr class="c-dd-intro__separator o-container" />

    <div class="c-dd-intro__paths o-container">
      <h2 class="c-dd-intro__paths-title">{{ t('pages.derechosDigitales.pathsTitle') }}</h2>
      <p class="c-dd-intro__paths-body">{{ t('pages.derechosDigitales.pathsBody') }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const { data: themes } = await useDdThemes();
</script>

<style lang="scss" scoped>
.c-dd-intro {
  margin-top: gap(10);

  @media (min-width: $md) {
    margin-top: gap(16);
  }

  &__wrapper {
    @media (min-width: $md) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: gap(12);
      align-items: start;
    }
  }

  &__col-text {
    margin-bottom: gap(8);

    @media (min-width: $md) {
      margin-bottom: 0;
    }
  }

  &__body {
    font-family: $font-primary;
    font-size: rem(16px);
    line-height: 1.78;
    color: $brand;
    margin: 0 0 gap(4) 0;

    @media (min-width: $md) {
      font-size: rem(18px);
    }
  }

  &__cta {
    @include basic-transition(transform, box-shadow);

    display: inline-block;
    margin-top: gap(2);
    padding: gap(2) gap(5);
    border-radius: 999px;
    background: linear-gradient(
      to right,
      $dd-gradient-from 0%,
      $dd-gradient-via 33%,
      $dd-gradient-via-2 66%,
      $dd-gradient-to 100%
    );
    color: $white;
    font-family: $font-secondary;
    font-size: rem(14px);
    font-weight: 700;
    text-decoration: none;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      color: $white;
    }
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__list-item {
    display: flex;
    align-items: center;
    gap: gap(3);
    padding: gap(3) 0;
    font-family: $font-secondary;
    font-size: rem(16px);
    font-weight: 800;
    color: $brand;

    img {
      width: 32px;
      height: 32px;
      object-fit: contain;
      flex-shrink: 0;
    }
  }

  &__separator {
    height: 2px;
    border: 0;
    margin: gap(10) auto;
    background: linear-gradient(
      to right,
      $dd-gradient-from 0%,
      $dd-gradient-via 33%,
      $dd-gradient-via-2 66%,
      $dd-gradient-to 100%
    );

    @media (min-width: $md) {
      margin: gap(14) auto;
    }
  }

  &__paths {
    text-align: center;
    max-width: 760px;
  }

  &__paths-title {
    font-family: $font-serif;
    font-style: italic;
    font-size: rem(32px);
    font-weight: 400;
    line-height: 1.2;
    margin: 0 0 gap(4) 0;
    background-image: linear-gradient(
      to right,
      $dd-gradient-from 0%,
      $dd-gradient-via 33%,
      $dd-gradient-via-2 66%,
      $dd-gradient-to 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;

    @media (min-width: $md) {
      font-size: rem(48px);
    }
  }

  &__paths-body {
    font-family: $font-primary;
    font-size: rem(16px);
    line-height: 1.75;
    color: $medium;
    margin: 0;

    @media (min-width: $md) {
      font-size: rem(18px);
    }
  }
}
</style>
