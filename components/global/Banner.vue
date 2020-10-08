<template>
  <section class="c-banner" :style="`background-image: url(${bg})`" :class="{ 'c-banner--blank' : !bg }">
    <div class="o-container c-banner__wrapper">
      <h3 class="c-banner__title">
        {{ title }}
      </h3>
      <div class="c-banner__desc">
        {{ description }}
      </div>
      <a :href="link" class="c-button c-banner__more">{{ button }}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
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
    bg: {
      type: String,
      default: ''
    }
  }
}
</script>
