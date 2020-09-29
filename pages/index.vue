<template>
  <div class="container">
    <Logo />
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </nuxt-link>

    <h1 class="title">
      {{ $t('home') }}
    </h1>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  }
}
</script>
