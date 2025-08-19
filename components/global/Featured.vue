<template>
  <section class="c-featured">

  <h2 v-if="title && featured" class="c-featured__title">
    {{ title }}
  </h2>
    <article class="c-featured__item" v-for="(f, i) in featured" :key="i">
      <h3 class="c-featured__item-title">
        {{ f.title }}
      </h3>
      <h4 class="c-featured__item-subtitle">
        {{ f.subtitle }}
      </h4>
      <NuxtImg
        :src="f.image"
        :alt="f.title"
        fit="cover"
        sizes="50vw xs:100vw"
        loading="lazy"
        class="c-featured__item-image"
      />
      <div class="c-featured__item-desc">
        {{ f.description }}
      </div>
      <a
        :href="f.link"
        target="_blank"
        class="c-button c-featured__item-more"
        >{{ f.button }}</a
      >
    </article>
  </section>
</template>

<script setup lang="ts">
const { title, featured } = defineProps({
  title: {
    type: String,
    default: "",
  },
  featured: {
    type: Array,
    default: () => [],
  },
});
</script>
