<template>
  <div>
    <section class="c-blog o-container o-section">
      <page-header
        :title="$t('pages.blog.title')"
        type="h1"
      />
      <div class="c-blog__wrapper">
        <blog-list-post
          v-for="(post, i) in posts"
          :key="i"
          :post="post"
          :author="post.author"
          no-button
        />
      </div>
    </section>
    <nav class="c-pagination o-section o-container">
      <nuxt-link :to="linkPrev" class="c-button c-button--outline">
        {{ $t('global.previousLabel') }}
      </nuxt-link>
      <nuxt-link v-if="hasNext" :to="`/blog/pagina/${nextPage}`" class="c-button c-button--outline">
        {{ $t('global.nextLabel') }}
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData ({ $content, params }) {
    const all = await $content('es/blog').fetch()
    const posts = await $content('es/blog')
      .sortBy('updatedAt', 'desc')
      .limit(9)
      .skip(params.number * 9)
      .fetch()
    const authors = await $content('es/equipo')
      .only(['name', 'slug'])
      .fetch()

    return {
      posts: posts.map((post) => {
        const authorName = authors.find((author) => {
          return author.slug === post.author
        })
        return {
          ...post,
          author: authorName.name,
          path: post.path.replace('/es', '')
        }
      }),
      totalPosts: all.length,
      hasNext: all.length > (parseInt(params.number) + 1) * 9,
      nextPage: parseInt(params.number) + 1,
      prevPage: parseInt(params.number) - 1,
      currentPage: params.number
    }
  },
  computed: {
    linkPrev () {
      return this.prevPage > 0 ? `/blog/pagina/${this.prevPage}` : '/blog'
    }
  },
  head () {
    return {
      title: `${this.$t('pages.blog.title')}: página ${this.currentPage}`,
      description: this.$te('pages.blog.description') ? this.$t('pages.blog.description') : this.$t('pages.blog.title'),
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$te('pages.blog.description') ? this.$t('pages.blog.description') : this.$t('pages.blog.title')
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: `${this.$t('pages.blog.title')}: página ${this.currentPage} | Political Watch`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.$te('pages.blog.description') ? this.$t('pages.blog.description') : this.$t('pages.blog.title')
        },
        {
          property: 'twitter:title',
          hid: 'twitter:title',
          content: `${this.$t('pages.blog.title')}: página ${this.currentPage} | Political Watch`
        }
      ]
    }
  }
}
</script>
