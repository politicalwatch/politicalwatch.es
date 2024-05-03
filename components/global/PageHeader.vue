<template>
  <header class="c-page-header">
    <component
      :is="type"
      class="c-page-header__title"
      :class="`c-page-header__title--${type}`"
    >
      {{ title }}
    </component>
    <div v-if="subtitle" class="c-page-header__subtitle">
      {{ subtitle }}
    </div>
    <img v-if="image" :src="image" :alt="title" class="c-page-header__image" />
  </header>
</template>

<script setup lang="ts">
const { title, subtitle, image, type } = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "h2",
    validator: (type) => ["h1", "h2"].includes(type),
  },
});
</script>
