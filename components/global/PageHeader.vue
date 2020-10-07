<template>
  <header class="c-page-header">
    <component :is="type" class="c-page-header__title" :class="`c-page-header__title--${type}`">
      {{ title }}
    </component>
    <div class="c-page-header__subtitle">
      {{ subtitle }}
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
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
