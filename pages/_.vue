<template>
  <main class="c-page" :class="`is-${page.slug}`">
    <div class="o-container">
      <page-header
        :title="page.title"
        :subtitle="page.subtitle"
        type="h1"
      />
    </div>
    <nuxt-content :document="page" />
  </main>
</template>

<script>
export default {
  name: 'Home',
  async asyncData ({ $content, params, app, error }) {
    let posts = []
    const path = `/${app.i18n.locale}/${params.pathMatch || 'index'}`
    const [page] = await $content({ deep: true }).where({ path }).fetch()
    if (!page) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    if (page.blogLatest) {
      posts = await $content('es/blog').sortBy('updatedAt', 'desc').limit(page.blogLatest).fetch()

      posts = posts.map(post => ({
        ...post,
        path: post.path.replace('/es', '')
      }))
    }

    return { page, posts }
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
