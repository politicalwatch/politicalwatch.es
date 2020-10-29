<template>
  <section class="o-container c-post o-section">
    <header class="c-post__header">
      <img
        class="c-post__image"
        :src="post.image"
        alt="post.title"
      >
      <h1 class="c-post__title">
        {{ post.title }}
      </h1>
    </header>
    <div class="c-post__meta">
      <div class="c-post__author">
        <img
          :src="author.avatar"
          :alt="author.name"
          class="c-post__author-avatar"
        >
        <p class="c-post__author-name">
          {{ author.name }}
        </p>
        <p class="c-post__author-date">
          {{ post.createdAt | formatDate }}
        </p>
      </div>

      <div class="c-post__share">
        {{ $t('global.shareLabel') }}
        <a :href="`https://twitter.com/intent/tweet?url=${$config.baseURL}${localePath(post.path)}`" target="_blank">
          <twitter />
        </a>
        <a :href="`https://api.whatsapp.com/send?text=${$config.baseURL}${localePath(post.path)}`" target="_blank">
          <whatsapp />
        </a>
        <a :href="`https://www.facebook.com/sharer/sharer.php?u=${$config.baseURL}${localePath(post.path)}`" target="_blank">
          <facebook />
        </a>
        <a :href="`https://t.me/share/url?url=${$config.baseURL}${localePath(post.path)}`" target="_blank">
          <telegram />
        </a>
        <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${$config.baseURL}${localePath(post.path)}`" target="_blank">
          <linkedin />
        </a>
      </div>
    </div>

    <nuxt-content :document="post" class="c-post__content o-section" />

    <div v-if="related.length" class="c-blog">
      <section-header :title="$t('blocks.blog.related')" />
      <div class="c-blog__wrapper">
        <blog-list-post
          v-for="(post, i) in related"
          :key="i"
          :post="post"
          :author="post.author"
          no-button
        />
      </div>
    </div>
  </section>
</template>

<script>
import twitter from '~/assets/images/share-twitter.svg?inline'
import whatsapp from '~/assets/images/share-whatsapp.svg?inline'
import facebook from '~/assets/images/share-facebook.svg?inline'
import telegram from '~/assets/images/share-telegram.svg?inline'
import linkedin from '~/assets/images/share-linkedin.svg?inline'

export default {
  components: {
    twitter,
    whatsapp,
    facebook,
    telegram,
    linkedin
  },
  async asyncData ({ $content, params }) {
    const post = await $content('es/blog', params.slug).fetch()
    const author = await $content('es/equipo', post.author).fetch()
    const related = await $content('es/blog').where({ slug: { $in: post.related } }).fetch()
    const authors = await $content('es/equipo')
      .only(['name', 'slug'])
      .fetch()

    return {
      post,
      author,
      related: related.map((post) => {
        const authorName = authors.find((author) => {
          return author.slug === post.author
        })
        return {
          ...post,
          author: authorName.name,
          path: post.path.replace('/es', '')
        }
      })
    }
  },
  head () {
    return {
      title: `${this.post.title} | Political Watch`,
      description: this.post.description || this.post.title,
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description || this.post.title
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: `${this.post.title} | Political Watch`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.$config.baseURL}${this.post.image}`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.post.description || this.post.title
        },
        {
          property: 'twitter:title',
          hid: 'twitter:title',
          content: `${this.post.title} | Political Watch`
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `${this.$config.baseURL}${this.post.image}`
        }
      ]
    }
  }
}
</script>
