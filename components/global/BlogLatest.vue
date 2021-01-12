<template>
  <section class="c-blog-latest o-container o-section" id="blog">
    <section-header
      :title="$t('blocks.blog.title')"
      :button="$t('blocks.blog.goto')"
      link="/blog"
    />
    <div class="c-blog-latest__wrapper">
      <blog-list-post
        v-for="(post, i) in latestPosts"
        :key="i"
        :post="post"
      />
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
