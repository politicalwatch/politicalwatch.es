<template>
  <section class="c-sections">
    <page-header :title="title" :subtitle="subtitle" />
  </section>
</template>

<script>
export default {
  name: 'Sections',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    sections: {
      type: Array,
      default: () => []
    }
  }
}
</script>
