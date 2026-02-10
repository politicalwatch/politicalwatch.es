<template>
  <div>
    <section class="c-blog o-container o-section">
      <OnlyInSpanish origin="blog" class="o-section" />

      <page-header
        :title="$t('pages.blog.title')"
        :subtitle="$t('pages.blog.subtitle')"
        type="h1"
      />
      <div class="c-blog__featured o-section">
        <div class="c-blog__main">
          <blog-list-post
            v-for="(post, i) in posts?.featuredPosts"
            :key="i"
            :post="post"
            :author="post.author?.name"
            no-button
          />
        </div>
        <div class="c-blog__side">
          <blog-list-post
            v-for="(post, i) in posts?.sidePosts"
            :key="i"
            :post="post"
            :author="post.author?.name"
            no-button
            no-image
          />
        </div>
      </div>
      <div class="c-blog__wrapper">
        <blog-list-post
          v-for="(post, i) in posts?.morePosts"
          :key="i"
          :post="post"
          :author="post.author?.name"
          no-button
        />
      </div>
    </section>
    <nav v-if="hasNext" class="c-pagination o-section o-container">
      <nuxt-link to="/blog/pagina/1" class="c-button c-button--outline">
        {{ t("global.nextLabel") }}
      </nuxt-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import OnlyInSpanish from "@/components/global/OnlyInSpanish.vue";

const { t, te, locale } = useI18n();
const config = useRuntimeConfig();
const route = useRoute();

const blogCollection = `blog_${locale.value}` as 'blog_es' | 'blog_en';
const teamCollection = `team_${locale.value}` as 'team_es' | 'team_en';

const { data: allCount } = await useAsyncData(
  `allCount-${locale.value}`,
  async () => {
    const count = await queryCollection(blogCollection as any).count();
    return count;
  }
);

const totalPosts = computed(() => allCount.value ?? 0);
const hasNext = computed(() => totalPosts.value > 9);

const { data: posts } = await useAsyncData("posts-blog", async () => {
  const [posts, authors] = await Promise.all([
    queryCollection(blogCollection as any)
      .order('createdAt', 'DESC')
      .limit(9)
      .all(),
    queryCollection(teamCollection as any)
      .order('order', 'DESC')
      .select('name', 'slug')
      .all(),
  ]);

  const postsWithAuthors = posts.map((post) => ({
    ...post,
    author: authors.find((author) => {
      return author.slug === post.author;
    }),
  }));

  return {
    featuredPosts: postsWithAuthors.slice(0, 1),
    sidePosts: postsWithAuthors.slice(1, 3),
    morePosts: postsWithAuthors.slice(3),
  };
});

useHead({
  title: t("pages.blog.title"),
  description: te("pages.blog.description")
    ? t("pages.blog.description")
    : t("pages.blog.title"),
  htmlAttrs: {
    lang: "es",
  },
  meta: [
    {
      property: "og:description",
      content: te("pages.blog.description")
        ? t("pages.blog.description")
        : t("pages.blog.title"),
    },
    {
      property: "og:title",
      content: `${t("pages.blog.title")} | Political Watch`,
    },
    {
      property: "og:url",
      content: `${config.public.baseURL}${route.path}`,
    },
    {
      property: "twitter:description",
      content: te("pages.blog.description")
        ? t("pages.blog.description")
        : t("pages.blog.title"),
    },
    {
      property: "twitter:title",
      content: `${t("pages.blog.title")} | Political Watch`,
    },
  ],
});
</script>

<style lang="scss">
.c-blog {
  &__featured {
    @media (min-width: $md) {
      display: flex;
      justify-content: space-between;
      padding-bottom: gap(8);
      border-bottom: $border-width solid $brand;
    }
  }

  &__main {
    @media (min-width: $md) {
      flex: 0 0 55%;
      max-width: 55%;
    }

    .c-list-post {
      &__title {
        @media (min-width: $md) {
          font-size: rem(40px);
        }
      }
    }
  }

  &__side {
    @media (min-width: $md) {
      flex: 0 0 30%;
      max-width: 30%;
    }

    .c-list-post {
      @media (min-width: $md) {
        padding-top: gap(4);
        border-top: $border-width solid $brand;
      }
    }
  }

  &__wrapper {
    margin-left: gap(-4);
    width: 100vw;

    @media (min-width: $sm) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: gap(4);
      margin-left: 0;
      width: auto;
    }
  }
}
</style>
