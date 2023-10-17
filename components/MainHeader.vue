<template>
  <header class="c-header o-section">
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
    <MainMenu :active="isMenuActive" />
  </header>
</template>

<script>
import logo from '~/assets/images/logo.svg?inline'

export default {
  name: 'MainHeader',
  components: {
    logo
  },
  data () {
    return {
      isMenuActive: false
    }
  },
  created () {
    this.$nuxt.$on('routeChanged', () => {
      this.isMenuActive = false
    })
  }
}
</script>
