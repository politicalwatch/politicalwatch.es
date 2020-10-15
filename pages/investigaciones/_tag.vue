<template>
  <research :title="tag | urldecode" />
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
      title: 'this.post.title',
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'this.post.title'
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: 'this.post.title'
        }
      ]
    }
  }
}
</script>
