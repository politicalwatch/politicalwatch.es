<template>
  <research :title="`${$t('pages.research.title')}`" :tag="tag | urldecode" title-type="h1" />
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
      title: `${this.$t('pages.research.title')}: ${this.tag}`.replace(/-/g, ' '),
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
          content: `${this.$t('pages.research.title')}: ${this.tag}`.replace(/-/g, ' ')
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.$te('pages.research.description') ? this.$t('pages.research.description') : this.$t('pages.research.title')
        },
        {
          property: 'twitter:title',
          hid: 'twitter:title',
          content: `${this.$t('pages.research.title')}: ${this.tag}`.replace(/-/g, ' ')
        }
      ]
    }
  }
}
</script>
