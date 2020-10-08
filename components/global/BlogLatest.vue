<template>
  <section class="c-blog-latest">
    <section-header
      :title="$t('blog.title')"
      :button="$t('blog.goto')"
      link="/blog"
    />
    <div class="c-blog-latest__wrapper">
      <article
        v-for="(post, $index) in latestPosts"
        :key="`post-${$index}`"
        class="c-blog-latest__post"
      >
        <nuxt-link :to="localePath(post.path)">
          <img
            :src="post.img"
            :alt="post.title"
            class="c-blog-latest__post-image"
          >
        </nuxt-link>
        <h3 class="c-blog-latest__post-title">
          <nuxt-link :to="localePath(post.path)">
            {{ post.title }}
          </nuxt-link>
        </h3>
        <div class="c-blog-latest__post-wrapper">
          <div class="c-blog-latest__post-desc">
            {{ post.description }}
          </div>
          <nuxt-link class="c-button c-button--outline" :to="localePath(post.path)">
            {{ $t('blog.readmore') }}
          </nuxt-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogLatest',
  computed: {
    latestPosts () {
      return this.$parent.posts
    }
  }
}
</script>
