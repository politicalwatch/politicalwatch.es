<template>
  <section class="c-sections">
    <page-header :title="title" :subtitle="subtitle" />
    <div class="c-sections__wrapper">
      <article
        v-for="(section, i) in sections"
        :key="i"
        class="c-sections__section"
      >
        <img
          :src="section.image"
          :alt="section.title"
          class="c-sections__section-img"
        >
        <h3 class="c-sections__section-title">
          {{ section.title }}
        </h3>
        <p class="c-sections__section-subtitle">
          {{ section.subtitle }}
        </p>
        <a :href="section.link" class="c-link">{{ section.button }}</a>
      </article>
    </div>
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
