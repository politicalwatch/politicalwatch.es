<template>
  <section class="c-hero">
    <div class="c-hero__wrapper">
      <div class="c-hero__content">
        <h1 class="c-hero__title">
          {{ t("blocks.hero.title") }}
          <span>{{ t("blocks.hero.title1") }}</span>
          <span>{{ t("blocks.hero.title2") }}</span>
          <span>{{ t("blocks.hero.title3") }}</span>
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

<style lang="scss" scoped>
.c-hero {
  background-image: linear-gradient(to bottom, rgba(241, 241, 241, 0), #f1f1f1);
  margin-bottom: gap(10);
  margin-top: gap(-4);

  @media (min-width: $md) {
    margin-top: gap(-12);
    margin-bottom: gap(16);
  }

  &__wrapper {
    @include container;

    & {
      padding-top: gap(4);
    }

    @media (min-width: $md) {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }

  &__content {
    max-width: rem(560px);
    flex: 1;
  }

  &__title {
    @include th3;

    & {
      margin: 0 0 gap(12) 0;
      text-transform: uppercase;
      position: relative;
      width: 100%;
    }

    @media (min-width: $md) {
      font-size: rem(32px);
      margin-bottom: gap(16);
    }

    span {
      color: $primary;
      display: block;
      font-size: rem(28px);
      line-height: 1.2;
      animation: topToBottom 9s linear infinite;
      opacity: 0;
      overflow: hidden;
      position: absolute;

      @media (min-width: 360px) {
        font-size: rem(35px);
      }

      @media (min-width: $md) {
        font-size: rem(50px);
        line-height: 1;
      }

      &:nth-child(2) {
        animation-delay: 3s;
      }

      &:nth-child(3) {
        animation-delay: 6s;
      }
    }
  }

  &__subtitle {
    color: $brand;
    font-family: $font-primary;
    font-size: rem(16px);
    font-weight: 900;
    line-height: 1.5;
    margin: 0;
    text-transform: uppercase;

    span {
      display: block;
      font-weight: 400;
      text-transform: none;
    }
  }

  &__image {
    display: block;
    position: relative;
    top: gap(4);

    @media (min-width: $md) {
      margin-bottom: gap(-10);
      position: unset;
      top: 0;
    }
  }
}
</style>
