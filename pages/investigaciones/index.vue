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
      title: this.$t('blocks.research.title'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('blocks.research.title')
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: this.$t('blocks.research.title')
        }
      ]
    }
  }
}
</script>
