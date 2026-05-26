<template>
  <section class="c-dd-hero">
    <video
      class="c-dd-hero__video"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    >
      <source src="/video/derechos-digitales-gradient-bg.mp4" type="video/mp4" />
    </video>

    <img
      src="/images/landing-derechos-digitales/abstract-lines.svg"
      alt=""
      aria-hidden="true"
      class="c-dd-hero__lines"
    />

    <div class="c-dd-hero__content o-container">
      <h1 class="c-dd-hero__title">
        <span class="c-dd-hero__title-part-1">{{ t('pages.derechosDigitales.heroTitlePart1') }}</span><br>
        <span class="c-dd-hero__title-part-2">{{ t('pages.derechosDigitales.heroTitlePart2') }}</span>
      </h1>

      <p class="c-dd-hero__subtitle">
        {{ t('pages.derechosDigitales.heroSubtitle') }}
        <span
          v-for="(chip, i) in themes"
          :key="i"
          class="c-dd-hero__subtitle-icon"
          :style="`mask-image: url(${chip.iconFill}); -webkit-mask-image: url(${chip.iconFill})`"
          aria-hidden="true"
        />
      </p>

      <p class="c-dd-hero__description">{{ t('pages.derechosDigitales.heroBody') }}</p>
      <div class="c-dd-hero__ctas">
        <a href="#themes" class="c-dd-hero__cta">{{ t('pages.derechosDigitales.heroCta') }}</a>
        <NuxtLinkLocale to="/publicaciones/tag/derechos-digitales" class="c-dd-hero__cta-secondary">
          {{ t('pages.derechosDigitales.heroCtaSecondary') }}
        </NuxtLinkLocale>
      </div>
    </div>

    <div class="c-dd-hero__themes-band">
      <nav class="c-dd-hero__themes" :aria-label="t('pages.derechosDigitales.heroNav')">
        <a
          v-for="(chip, i) in themes"
          :key="i"
          :href="`#theme-${i + 1}`"
          class="c-dd-hero__chip"
        >
          <span class="c-dd-hero__chip-num" aria-hidden="true">{{ i + 1 }}</span>
          {{ chip.title }}
        </a>
      </nav>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const { data: themes } = await useDdThemes();
</script>

<style lang="scss" scoped>
.c-dd-hero {

  position: relative;
  overflow: hidden;
  margin-top: gap(-10);
  background: linear-gradient(135deg, $dd-gradient-from 0%, $dd-gradient-via 33%, $dd-gradient-via-2 66%, $dd-gradient-to 100%);

  @media (prefers-reduced-motion: no-preference) {
    min-height: 560px;

    @media (min-width: $md) {
      min-height: 640px;
    }
  }

  &__video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;

    @media (prefers-reduced-motion: reduce) {
      display: none;
    }
  }

  &__lines {
    position: absolute;
    width: 100%;
    bottom: 0;
    aspect-ratio: 100 / 65;
    object-fit: cover;
    scale: 1.4;
    mix-blend-mode: soft-light;
    pointer-events: none;
    z-index: 0;
  }

  &__content {
    position: relative;
    z-index: 1;
    padding-top: gap(8);
    padding-bottom: gap(10);

    @media (min-width: $md) {
      padding-top: gap(14);
      padding-bottom: gap(12);
    }
  }

  &__title {
    font-size: rem(40px);
    font-weight: 400;
    line-height: 1.1;
    color: $white;
    margin: 0 0 gap(3) 0;

    @media (min-width: $md) {
      font-size: rem(64px);
    }
  }

  &__title-part-1 {
    font-family: $font-primary;
    font-weight: 900;
    font-style: normal;
  }

  &__title-part-2 {
    font-family: $font-serif;
    font-style: italic;
    font-weight: 400;
  }

  &__subtitle {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: gap(1.5);
    font-family: $font-primary;
    font-size: rem(20px);
    font-weight: 400;
    color: $white;
    margin: 0 0 gap(5) 0;

    @media (min-width: $md) {
      font-size: rem(28px);
    }
  }

  &__subtitle-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    background-color: $white;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    flex-shrink: 0;
  }

  &__description {
    font-family: $font-primary;
    font-size: rem(16px);
    line-height: 1.55;
    white-space: pre-line;
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 gap(6) 0;
    max-width: 680px;

    @media (min-width: $md) {
      font-size: rem(18px);
    }
  }

  &__ctas {
    display: flex;
    flex-wrap: wrap;
    gap: gap(3);
  }

  &__cta {
    display: inline-block;
    background: $white;
    color: $brand;
    border: 2px solid $white;
    font-family: $font-secondary;
    font-size: rem(15px);
    font-weight: 800;
    text-decoration: none;
    padding: gap(2) gap(4);
    border-radius: 999px;
    transition: background 0.3s, color 0.3s, border-color 0.3s;

    &:hover {
      background: transparent;
      color: $white;
    }
  }

  &__cta-secondary {
    display: inline-block;
    background: transparent;
    color: $white;
    border: 2px solid rgba(255, 255, 255, 0.8);
    font-family: $font-secondary;
    font-size: rem(15px);
    font-weight: 800;
    text-decoration: none;
    padding: gap(2) gap(4);
    border-radius: 999px;
    transition: background 0.3s, color 0.3s, border-color 0.3s;

    &:hover {
      background: $white;
      color: $brand;
      border-color: $white;
    }
  }

  &__themes-band {
    position: relative;
    z-index: 1;
    background: $dd-gradient-from;
    padding: gap(3) gap(2);
  }

  &__themes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: gap(2);
  }

  &__chip {
    display: flex;
    align-items: center;
    gap: gap(2);
    padding: gap(1) gap(1.2);
    border-radius: 999px;
    background: $dd-gradient-from;
    color: $white;
    border: 1px solid rgba(255, 255, 255, 0.8);
    font-family: $font-primary;
    font-size: rem(14px);
    font-weight: 700;
    text-decoration: none;
    transition: background 0.3s, color 0.3s, border-color 0.3s;

    &:hover {
      background: $white;
      color: $dd-gradient-from;
      border-color: $white;

      .c-dd-hero__chip-num {
        background: linear-gradient(135deg, $dd-gradient-from 0%, $dd-gradient-via 33%, $dd-gradient-via-2 66%, $dd-gradient-to 100%);
        color: $white;
      }
    }
  }

  &__chip-num {
    @include basic-transition(background, color);

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: linear-gradient(135deg, $dd-gradient-from 0%, $dd-gradient-via 33%, $dd-gradient-via-2 66%, $dd-gradient-to 100%);
    color: $white;
    font-weight: 700;
    font-size: rem(12px);
    flex-shrink: 0;
  }
}
</style>
