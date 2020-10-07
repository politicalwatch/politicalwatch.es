<template>
  <section class="c-hero">
    <div class="c-hero__wrapper">
      <div class="c-hero__content">
        <h1 class="c-hero__title" v-html="$t('blocks.hero.title')" />
        <h3 class="c-hero__subtitle" v-html="$t('blocks.hero.subtitle')" />
      </div>
      <img src="~/assets/images/hero.svg" alt="Political Watch" class="c-hero__image">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
