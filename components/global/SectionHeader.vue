<template>
  <header class="c-section-header o-section">
    <component :is="type" class="c-section-header__title">
      {{ title }}
    </component>
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
    },
    type: {
      type: String,
      default: 'h2',
      validator: type => ['h1', 'h2'].includes(type)
    }
  }
}
</script>
