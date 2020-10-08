<template>
  <header class="c-section-header">
    <h2 class="c-section-header__title">
      {{ title }}
    </h2>
    <nuxt-link v-if="link && button" class="c-link" :to="localePath(link)">
      {{ button }}
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    button: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
