<template>
  <div>
    <Logo />
    <ul>
      <li
        v-for="locale in availableLocales"
        :key="locale.code"
      >
        <nuxt-link :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </nuxt-link>
      </li>
    </ul>

    <ul>
      <li>
        <nuxt-link :to="localeRoute('/nosotros')">
          {{ $t('about.title') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/nosotros/transparencia')">
          {{ $t('transparency.title') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">
          {{ $t('blog.title') }}
        </nuxt-link>
      </li>
    </ul>
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
