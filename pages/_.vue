<template>
  <main class="c-page" :class="`is-${page.slug}`">
    <div class="o-container">
      <page-header
        :title="page.title"
        :subtitle="page.subtitle"
        :image="page.image"
        type="h1"
      />
    </div>
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
