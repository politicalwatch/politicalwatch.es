<template>
  <nav class="c-menu" :class="{ 'is-active' : active }">
    <ul class="c-menu__list">
      <li class="c-menu__item">
        <nuxt-link :to="localeRoute('/nosotras')">
          {{ $t('about.title') }}
        </nuxt-link>
      </li>
      <li class="c-menu__item">
        <nuxt-link :to="localePath('/que-hacemos')">
          {{ $t('what.title') }}
        </nuxt-link>
      </li>
      <li class="c-menu__item">
        <nuxt-link :to="localePath('/participa')">
          {{ $t('join.title') }}
        </nuxt-link>
      </li>
      <li class="c-menu__item">
        <nuxt-link to="/blog">
          {{ $t('blog.title') }}
        </nuxt-link>
      </li>
      <li
        v-for="locale in availableLocales"
        :key="locale.code"
        class="c-menu__item c-menu__item--lang"
      >
        <nuxt-link :to="switchLocalePath(locale.code)">
          <icon-lang /> {{ locale.code }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import iconLang from '~/assets/images/icon-lang.svg?inline'

export default {
  components: {
    iconLang
  },
  props: {
    active: Boolean
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(l => l.code !== this.$i18n.locale)
    }
  }
}
</script>
