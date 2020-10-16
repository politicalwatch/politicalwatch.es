<template>
  <section class="c-research o-container o-section">
    <section-header
      :title="title || $t('blocks.research.title')"
      :button="$t('blocks.research.goto')"
      link="/investigaciones"
      :filters="filters"
      :type="titleType"
    />
    <div class="c-research__wrapper">
      <article
        v-for="(item, i) in research"
        :key="i"
        class="c-research__item"
      >
        <div class="c-research__item-wrapper">
          <p class="c-research__item-tags">
            <nuxt-link
              v-for="tag in item.tags"
              :key="tag"
              :to="`/investigaciones/${tag}`"
              class="c-research__item-tag"
            >
              {{ tag | urldecode }}
            </nuxt-link>
          </p>
          <h3 class="c-research__item-title">
            {{ item.title }}
          </h3>
          <div class="c-research__item-desc">
            {{ item.description }}
          </div>
          <a
            :href="item.file"
            target="_blank"
            class="c-button c-button--outline c-research__item-link"
          >
            {{ $t('blocks.research.button') }} <download />
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import download from '~/assets/images/icon-download.svg?inline'

export default {
  name: 'Research',
  components: {
    download
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleType: {
      type: String,
      default: 'h2',
      validator: type => ['h1', 'h2'].includes(type)
    },
    filters: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    research () {
      return this.$parent.research
    }
  }
}
</script>
