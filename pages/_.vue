<template>
  <section class="o-container">
    <nuxt-content :document="page" />
  </section>
</template>

<script>
export default {
  name: 'Page',
  async asyncData ({ $content, params, app, error }) {
    const path = `/${app.i18n.locale}/${params.pathMatch || 'index'}`
    const [page] = await $content({ deep: true }).where({ path }).fetch()
    if (!page) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return { page }
  },
  head () {
    return {
      title: this.page.title,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.title
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: this.page.title
        }
      ]
    }
  }
}
</script>
