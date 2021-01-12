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
        <a href="#" @click="toggleSearch"><iconSearch /></a>
      </li>
      <!-- <li -->
      <!--   v&#45;for="locale in availableLocales" -->
      <!--   :key="locale.code" -->
      <!--   class="c&#45;menu__item c&#45;menu__item&#45;&#45;lang" -->
      <!-- > -->
      <!--   <nuxt&#45;link :to="switchLocalePath(locale.code)"> -->
      <!--     <icon&#45;lang /> {{ locale.code }} -->
      <!--   </nuxt&#45;link> -->
      <!-- </li> -->
    </ul>
    <div v-if="searchShown">
      <search @closed="toggleSearch"/>
    </div>
  </nav>
</template>

<script>
import iconSearch from '~/assets/images/icon-search.svg?inline'
// import iconLang from '~/assets/images/icon-lang.svg?inline'

export default {
  components: {
    // iconLang
    iconSearch
  },
  props: {
    active: Boolean
  },
  data () {
    return {
      searchShown: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(l => l.code !== this.$i18n.locale)
    }
  },
  methods: {
    toggleSearch () {
      if (process.browser) {
        this.searchShown = !this.searchShown
      }
    }
  }
}
</script>
