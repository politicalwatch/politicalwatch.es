<template>
  <section>
    <nuxt-content :document="page" />
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params, app, error }) {
    const path = `/${app.i18n.locale}/${params.pathMatch || 'index'}`
    const [page] = await $content({ deep: true }).where({ path }).fetch()
    if (!page) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return { page }
  }
}
</script>
