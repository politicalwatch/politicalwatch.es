<template>
  <section>
    <nuxt-content :document="post" />
  </section>
</template>

<script>
export default {
  async asyncData (context) {
    const { $content, params } = context
    const post = await $content('es/blog', params.slug).fetch()

    return { post }
  }
}
</script>
