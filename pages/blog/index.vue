<template>
  <div>

    <section class="c-blog o-container o-section">

      <OnlyInSpanish origin="blog" class="o-section" />

      <page-header
        :title="$t('pages.blog.title')"
        :subtitle="$t('pages.blog.subtitle')"
        type="h1" />
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

const { data: allCount } = await useAsyncData(
  `allCount-${locale.value}`,
  async () => {
    const count = await queryContent("blog").locale(locale.value).count();
    return count;
  }
);

const totalPosts = computed(() => allCount.value ?? 0);
const hasNext = computed(() => totalPosts.value > 9);

const { data: posts } = await useAsyncData("posts-blog", async () => {
  const [posts, authors] = await Promise.all([
    queryContent("blog")
      .locale(locale.value)
      .sort({ order: -1, createdAt: -1 })
      .limit(9)
      .find(),
    queryContent("equipo")
      .locale(locale.value)
      .sort({ order: -1, createdAt: -1 })
      .only(["name", "slug"])
      .find(),
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
      hid: "og:description",
      property: "og:description",
      content: te("pages.blog.description")
        ? t("pages.blog.description")
        : t("pages.blog.title"),
    },
    {
      property: "og:title",
      hid: "og:title",
      content: `${t("pages.blog.title")} | Political Watch`,
    },
    {
      hid: "twitter:description",
      property: "twitter:description",
      content: te("pages.blog.description")
        ? t("pages.blog.description")
        : t("pages.blog.title"),
    },
    {
      property: "twitter:title",
      hid: "twitter:title",
      content: `${t("pages.blog.title")} | Political Watch`,
    },
  ],
});
</script>
