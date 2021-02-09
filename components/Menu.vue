<template>
  <nav class="c-menu" :class="{ 'is-active' : active }">
    <ul class="c-menu__list">
      <li class="c-menu__item">
        <nuxt-link :to="localeRoute('/nosotras')">
          {{ $t('pages.about.title') }}
        </nuxt-link>
      </li>
      <li class="c-menu__item">
        <nuxt-link :to="localePath('/que-hacemos')">
          {{ $t('pages.what.title') }}
        </nuxt-link>
      </li>
      <li class="c-menu__item">
        <nuxt-link :to="localePath('/participa')">
          {{ $t('pages.join.title') }}
        </nuxt-link>
      </li>
      <li class="c-menu__item">
        <nuxt-link to="/blog">
          {{ $t('pages.blog.title') }}
        </nuxt-link>
      </li>
      <li class="c-menu__item c-menu__item-search">
        <a class="toggle-tooltip" aria-label="Buscador político" href="#" @click="openSearch"><iconSearch /></a>
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
import iconSearch from '~/assets/images/icon-search.svg?inline'

export default {
  components: {
    iconLang,
    iconSearch
  },
  props: {
    active: Boolean
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(l => l.code !== this.$i18n.locale)
    }
  },
  methods: {
    openSearch () {
      this.$emit('search')
    }
  }
}
</script>
