<template>
  <research title-type="h1" :filters="tags" />
</template>

<script>
export default {
  async asyncData ({ $content, app }) {
    const research = await $content(`/${app.i18n.locale}/investigaciones`)
      .fetch()
    const tags = new Set(research.map(item => item.tags).flat())
    return { research, tags: [...tags] }
  },
  head () {
    return {
      title: this.$t('pages.research.title'),
      description: this.$te('pages.research.description') ? this.$t('pages.research.description') : this.$t('pages.research.title'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$te('pages.research.description') ? this.$t('pages.research.description') : this.$t('pages.research.title')
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: `${this.$t('pages.research.title')} | Political Watch`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.$te('pages.research.description') ? this.$t('pages.research.description') : this.$t('pages.research.title')
        },
        {
          property: 'twitter:title',
          hid: 'twitter:title',
          content: `${this.$t('pages.research.title')} | Political Watch`
        }
      ]
    }
  }
}
</script>
