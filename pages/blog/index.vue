<template>
  <section class="c-blog o-container o-section">
    <page-header
      :title="$t('blocks.blog.title')"
      type="h1"
    />
    <div class="c-blog__wrapper">
      <blog-list-post
        v-for="(post, i) in posts"
        :key="i"
        :post="post"
        no-button
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData ({ $content }) {
    const posts = await $content('es/blog').sortBy('updatedAt', 'desc').fetch()

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
