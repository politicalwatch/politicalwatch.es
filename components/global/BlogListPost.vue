<template>
  <article class="c-list-post" :class="{ 'c-list-post--noimage' : noImage }">
    <nuxt-link v-if="!noImage" :to="localePath(post.path)">
      <img
        :src="post.image"
        :alt="post.title"
        class="c-list-post__image"
      >
    </nuxt-link>
    <h3 class="c-list-post__title">
      <nuxt-link :to="localePath(post.path)">
        {{ post.title }}
      </nuxt-link>
    </h3>
    <div class="c-list-post__wrapper">
      <div v-if="author" class="c-list-post__author">
        <strong>{{ author }}</strong> / {{ post.createdAt | formatDate }}
      </div>
      <div class="c-list-post__desc">
        {{ post.description }}
      </div>
      <nuxt-link
        v-if="!noButton"
        :to="localePath(post.path)"
        class="c-button c-button--outline"
      >
        {{ $t('blocks.blog.button') }}
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogListPost',
  props: {
    post: {
      type: Object,
      default: () => {}
    },
    noButton: {
      type: Boolean,
      default: false
    },
    noImage: {
      type: Boolean,
      default: false
    },
    author: {
      type: String,
      default: ''
    }
  }
}
</script>
