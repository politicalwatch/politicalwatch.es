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
        <nuxt-link :to="localeRoute('/nosotras')">
          {{ $t('about.title') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/que-hacemos')">
          {{ $t('what.title') }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('/participa')">
          {{ $t('join.title') }}
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
