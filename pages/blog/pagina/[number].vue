<template>
  <div>
    <section class="c-blog o-container o-section">
      <page-header :title="t('pages.blog.title')" type="h1" />
      <div class="c-blog__wrapper">
        <BlogListPost
          v-for="(post, i) in posts"
          :key="i"
          :post="post"
          :author="post.author?.name"
          no-button
        />
      </div>
    </section>
    <nav class="c-pagination o-section o-container">
      <NuxtLink :to="linkPrev" class="c-button c-button--outline">
        {{ t("global.previousLabel") }}
      </NuxtLink>
      <NuxtLink
        v-if="hasNext"
        :to="`/blog/pagina/${nextPage}`"
        class="c-button c-button--outline"
      >
        {{ t("global.nextLabel") }}
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import BlogListPost from "@/components/global/BlogListPost.vue";

const route = useRoute();
const { t, te, locale } = useI18n();

const currentPage = parseInt(route.params.number as string);

const { data: allCount } = await useAsyncData("allCount", () =>
  queryContent("blog").locale(locale.value).count()
);

const { data: posts } = await useAsyncData(
  `posts-page-${currentPage}`,
  async () => {
    const [posts, authors] = await Promise.all([
      queryContent("blog")
        .locale(locale.value)
        .sort({ order: -1, createdAt: -1 })
        .limit(9)
        .skip(currentPage * 9)
        .find(),
      queryContent("equipo")
        .locale(locale.value)
        .sort({ order: -1, createdAt: -1 })
        .only(["name", "slug"])
        .find(),
    ]);

    return posts.map((post) => ({
      ...post,
      author: authors.find((author) => {
        return author.slug === post.author;
      }),
    }));
  }
);

const totalPosts = computed(() => allCount.value ?? 0);
const hasNext = computed(() => totalPosts.value > (currentPage + 1) * 9);
const nextPage = currentPage + 1;
const prevPage = currentPage - 1;

const linkPrev = computed(() => {
  return prevPage > 0 ? `/blog/pagina/${prevPage}` : "/blog";
});

useHead({
  title: `${t("pages.blog.title")}: página ${currentPage}`,
  htmlAttrs: {
    lang: "es",
  },
  meta: [
    {
      name: "description",
      content: te("pages.blog.description")
        ? t("pages.blog.description")
        : t("pages.blog.title"),
    },
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
      content: `${t(
        "pages.blog.title"
      )}: página ${currentPage} | Political Watch`,
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
      content: `${t(
        "pages.blog.title"
      )}: página ${currentPage} | Political Watch`,
    },
  ],
});
</script>
