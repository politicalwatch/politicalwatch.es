<template>
  <section class="c-featured">
    <h2 v-if="title" class="c-featured__title">
      {{ title }}
    </h2>

    <article v-if="featured" class="c-featured__item">
      <h3 class="c-featured__item-title">
        {{ featured.title }}
      </h3>
      <h4 class="c-featured__item-subtitle">
        {{ featured.subtitle }}
      </h4>
      <img
        :src="featured.image"
        :alt="featured.title"
        class="c-featured__item-image"
        loading="lazy"
      >
      <div class="c-featured__item-desc">
        {{ featured.description }}
      </div>
      <a :href="featured.link" class="c-button c-featured__item-more">{{ featured.button }}</a>
    </article>
    <div v-if="others" class="c-featured__wrapper">
      <article
        v-for="(item, i) in others"
        :key="i"
        class="c-featured__other"
      >
        <h3 class="c-featured__other-title">
          {{ item.title }}
        </h3>
        <div class="c-featured__other-desc">
          {{ item.description }}
        </div>
        <a :href="item.link" class="c-button c-featured__other-more">{{ item.button }}</a>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Featured',
  props: {
    title: {
      type: String,
      default: ''
    },
    featured: {
      type: Object,
      default: () => {}
    },
    others: {
      type: Array,
      default: () => []
    }
  }
}
</script>
