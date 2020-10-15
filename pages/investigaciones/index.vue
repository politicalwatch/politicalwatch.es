<template>
  <research title-type="h1" />
</template>

<script>
export default {
  async asyncData ({ $content, app }) {
    const research = await $content(`/${app.i18n.locale}/investigaciones`)
      .fetch()

    return { research }
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
