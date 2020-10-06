<template>
  <section class="o-container">
    <article
      v-for="(post, $index) in posts"
      :key="`post-${$index}`"
    >
      <h3>
        <nuxt-link :to="localePath(post.path)">
          {{ post.title }}
        </nuxt-link>
      </h3>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData ({ $content }) {
    const posts = await $content('es/blog').fetch()

    return {
      posts: posts.map(post => ({
        ...post,
        path: post.path.replace('/es', '')
      }))
    }
  },
  head: {
    title: 'Blog',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Blog'
      },
      {
        property: 'og:title',
        hid: 'og:title',
        content: 'Blog'
      }
    ]
  }
}
</script>
