<template>
  <header class="c-header o-section">
    <search v-if="searchShown" @closed="toggleSearch"/>
    <nuxt-link :to="localePath('index')" class="c-header__logo">
      <logo />
    </nuxt-link>
    <button
      class="c-header__menu-toggle"
      :class="{ 'is-active' : isMenuActive }"
      @click.prevent="isMenuActive = !isMenuActive"
    >
      <span class="bar" />
      <span class="bar" />
      <span class="bar" />
      <span class="text">{{ $t('global.menuToggle') }}</span>
    </button>
    <Menu :active="isMenuActive" @search="toggleSearch" />
  </header>
</template>

<script>
import logo from '~/assets/images/logo.svg?inline'

export default {
  name: 'Header',
  components: {
    logo
  },
  data () {
    return {
      isMenuActive: false,
      searchShown: false
    }
  },
  created () {
    this.$nuxt.$on('routeChanged', () => {
      this.isMenuActive = false
    })
  },
  methods: {
    toggleSearch () {
      if (process.browser) {
        this.searchShown = !this.searchShown
      }
      if (this.searchShown) {
        this.isMenuActive = !this.isMenuActive
      }
    }
  }
}
</script>
