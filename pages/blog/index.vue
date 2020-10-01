<template>
  <div class="blog container mx-auto">
    <section class="grid grid-cols-3 gap-4 pt-12">
      <article
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
        class="post max-w-sm rounded overflow-hidden shadow-lg flex flex-col"
      >
        <div class="px-6 py-4 flex-2">
          <h3>
            <nuxt-link :to="localePath(post.path)">
              {{ post.title }}
            </nuxt-link>
          </h3>
        </div>
      </article>
    </section>
  </div>
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
