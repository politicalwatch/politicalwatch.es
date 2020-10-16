<template>
  <header class="c-section-header o-section">
    <component :is="type" class="c-section-header__title">
      {{ title }}
    </component>
    <nuxt-link
      v-if="link && button && !filters.length"
      class="c-link"
      :to="localePath(link)"
    >
      {{ button }}
    </nuxt-link>
    <div v-if="filters.length" class="c-dropdown">
      <select @change="goToTag($event)">
        <option value="">
          {{ $t('global.filtersLabel') }}
        </option>
        <option
          v-for="tag in filters"
          :key="tag"
          :value="tag"
        >
          {{ tag | urldecode }}
        </option>
      </select>
    </div>
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
    },
    filters: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goToTag (event) {
      // eslint-disable-next-line no-console
      console.log(event.target.value)
      this.$router.push({ path: `/investigaciones/${event.target.value}` })
    }
  }
}
</script>
