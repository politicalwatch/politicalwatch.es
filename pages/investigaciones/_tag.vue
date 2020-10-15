<template>
  <research :title="`${$t('blocks.research.title')}: ${tag}` | urldecode" title-type="h1" />
</template>

<script>
export default {
  async asyncData ({ $content, params, app }) {
    const tag = params.tag
    const research = await $content(`/${app.i18n.locale}/investigaciones`)
      .where({ tags: { $contains: params.tag } })
      .fetch()

    return { research, tag }
  },
  head () {
    return {
      title: `${this.$t('blocks.research.title')}: ${this.tag}`.replace(/-/g, ' '),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.$t('blocks.research.title')}: ${this.tag}`.replace(/-/g, ' ')
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: `${this.$t('blocks.research.title')}: ${this.tag}`.replace(/-/g, ' ')
        }
      ]
    }
  }
}
</script>
