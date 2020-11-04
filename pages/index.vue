<template>
  <main class="c-page is-home">
    <nuxt-content :document="page" />
  </main>
</template>

<script>
import page from '~/mixins/page.js'

export default {
  name: 'Home',
  mixins: [page]
}
</script>
