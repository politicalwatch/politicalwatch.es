<template>
  <section>
    <nuxt-content :document="page" />
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params, app }) {
    const page = await $content(`${app.i18n.locale}/pages`, params.slug).fetch()

    return { page }
  }
}
</script>
