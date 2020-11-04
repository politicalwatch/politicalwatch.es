<template>
  <div>
    <section class="c-blog o-container o-section">
      <page-header
        :title="$t('pages.blog.title')"
        type="h1"
      />
      <div class="c-blog__featured o-section">
        <div class="c-blog__main">
          <blog-list-post
            v-for="(post, i) in featuredPosts"
            :key="i"
            :post="post"
            :author="post.author"
            no-button
          />
        </div>
        <div class="c-blog__side">
          <blog-list-post
            v-for="(post, i) in sidePosts"
            :key="i"
            :post="post"
            :author="post.author"
            no-button
            no-image
          />
        </div>
      </div>
      <div class="c-blog__wrapper">
        <blog-list-post
          v-for="(post, i) in morePosts"
          :key="i"
          :post="post"
          :author="post.author"
          no-button
        />
      </div>
    </section>
    <nav v-if="hasNext" class="c-pagination o-section o-container">
      <nuxt-link to="/blog/pagina/1" class="c-button c-button--outline">
        {{ $t('global.nextLabel') }}
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData ({ $content }) {
    const all = await $content('es/blog').fetch()
    const posts = await $content('es/blog')
      .sortBy('order', 'desc')
      .sortBy('createdAt', 'desc')
      .limit(9)
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
      hasNext: all.length > 9
    }
  },
  computed: {
    featuredPosts () {
      return this.posts.slice(0, 1)
    },
    sidePosts () {
      return this.posts.slice(1, 3)
    },
    morePosts () {
      return this.posts.slice(3)
    }
  },
  head () {
    return {
      title: this.$t('pages.blog.title'),
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
          content: `${this.$t('pages.blog.title')} | Political Watch`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.$te('pages.blog.description') ? this.$t('pages.blog.description') : this.$t('pages.blog.title')
        },
        {
          property: 'twitter:title',
          hid: 'twitter:title',
          content: `${this.$t('pages.blog.title')} | Political Watch`
        }
      ]
    }
  }
}
</script>
