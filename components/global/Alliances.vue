<template>
  <section class="c-alliances o-container o-section">
    <h2 class="c-alliances__title">
      {{ $t('blocks.alliances.title') }}
    </h2>
    <div class="c-alliances__scroller">
      <div class="c-alliances__wrapper">
        <a
          v-for="(alliance, i) in alliances"
          :key="i"
          :href="alliance.link"
          target="_blank"
          class="c-alliances__item"
        >
          <img :src="alliance.image" :alt="alliance.title">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Alliances',
  props: {
    alliances: {
      type: Array,
      default: () => []
    }
  }
}
</script>
