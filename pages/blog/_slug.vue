<template>
  <section class="o-container">
    <nuxt-content :document="post" />
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('es/blog', params.slug).fetch()

    return { post }
  },
  head () {
    return {
      title: this.post.title,
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.title
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.media
        }
      ]
    }
  }
}
</script>
