<template>
  <section id="blog" class="c-blog-latest o-container o-section">
    <SectionHeader
      :title="t('blocks.blog.title')"
      :button="t('blocks.blog.goto')"
      link="/blog"
    />
    <div class="c-blog-latest__wrapper">
      <BlogListPost v-for="post in latestPosts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

const { postLimit, lineOfWork } = defineProps({
  postLimit: {
    type: Number,
    default: null,
  },
  lineOfWork: {
    type: String,
    default: null,
  },
});

const { data: latestPosts } = await useAsyncData("posts-latest", () => {
  const collectionName = `blog_${locale.value}` as 'blog_es' | 'blog_en';
  let query = queryCollection(collectionName)
    .order('createdAt', 'DESC');

  if (lineOfWork) query = query.where('lineOfWork', '=', lineOfWork);
  if (postLimit) query = query.limit(postLimit);

  return query.all();
});
</script>

<style lang="scss" scoped>
.c-blog-latest {
  &__wrapper {
    margin-left: gap(-4);
    width: 100vw;

    @media (min-width: $sm) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: gap(4);
      margin-left: 0;
      width: auto;
    }
  }

  .c-list-post {
    @media (min-width: $md) {
      padding-right: gap(12);
    }
  }
}
</style>
