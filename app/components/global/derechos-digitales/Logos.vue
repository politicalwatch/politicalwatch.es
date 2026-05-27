<template>
  <section class="c-dd-logos">
    <div class="c-dd-logos__wrapper o-container">
      <i18n-t
        keypath="pages.derechosDigitales.logosText"
        tag="p"
        class="c-dd-logos__text"
        scope="global"
      >
        <template #redLink>
          <a href="https://www.red.es" target="_blank" rel="noopener noreferrer">Red.es</a>
        </template>
      </i18n-t>
      <div class="c-dd-logos__logos">
        <NuxtImg
          src="/images/landing-derechos-digitales/logo-next-generation.png"
          alt="NextGenerationEU"
          class="c-dd-logos__image"
          width="898"
          height="255"
          sizes="300px"
          loading="lazy"
        />
        <NuxtImg
          src="/images/landing-derechos-digitales/logo-ministerio-trans-dig-fun-pub.png"
          alt="Ministerio para la Transformación Digital y de la Función Pública"
          class="c-dd-logos__image"
          width="1157"
          height="265"
          sizes="300px"
          loading="lazy"
        />
        <NuxtImg
          src="/images/landing-derechos-digitales/logo-red-es.png"
          alt="Red.es"
          class="c-dd-logos__image"
          width="518"
          height="227"
          sizes="300px"
          loading="lazy"
        />
        <NuxtImg
          src="/images/landing-derechos-digitales/logo-plan-rtr.png"
          alt="Plan de Recuperación, Transformación y Resiliencia"
          class="c-dd-logos__image"
          width="607"
          height="279"
          sizes="300px"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.c-dd-logos {
  padding: gap(5) 0;

  @media (min-width: $md) {
    padding: gap(6) 0;
  }

  &__wrapper {
    text-align: center;

    @media (min-width: $sm) {
      display: grid;
      grid-template-columns: 40% 60%;
      gap: gap(8);
      align-items: center;
      text-align: left;
    }
  }

  &__logos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: gap(3);
    align-items: center;
    justify-items: center;

    @media (min-width: $md) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: gap(4);
    }
  }

  &__image {
    display: block;
    width: auto;
    max-width: 100%;
    max-height: rem(64px);
    height: auto;

    &:nth-child(1),
    &:nth-child(2) {
      grid-column: 1 / -1;
    }
  }

  &__text {
    font-family: $font-primary;
    font-size: rem(16px);
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: gap(4);
    margin-inline: auto;

    @media (min-width: $md) {
      font-size: rem(16px);
      margin: 0;
    }
  }
}
</style>
