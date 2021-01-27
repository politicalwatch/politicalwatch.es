<template>
  <section v-if="isOpen" class="c-cookies">
    <div class="o-container">
      <p>{{ $t('blocks.cookies.message') }}</p>
      <p>
        <a
          href="#"
          class="c-button"
          @click.prevent="accept"
        >{{ $t('blocks.cookies.accept') }}</a>
        <a
          href="#"
          class="c-button c-button--outline"
          @click.prevent="deny"
        >{{ $t('blocks.cookies.reject') }}</a>
      </p>
    </div>
  </section>
</template>

<script>
import { bootstrap } from 'vue-gtag'

export default {
  name: 'Cookies',
  data () {
    return {
      isOpen: false
    }
  },
  mounted () {
    if (process.browser) {
      if (this.getGDPR() === null) {
        this.isOpen = true
      }
    }
  },
  methods: {
    deny () {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
      }
    },
    accept () {
      if (process.browser) {
        bootstrap().then(() => {
          this.isOpen = false
          localStorage.setItem('GDPR:accepted', true)
          location.reload()
        })
      }
    },
    getGDPR () {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted')
      }
    }
  }
}
</script>
