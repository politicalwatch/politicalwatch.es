<template>
  <div>
    <section class="c-blog o-container o-section">
      <page-header :title="$t('pages.blog.title')" type="h1" />
      <div class="c-blog__featured o-section">
        <div class="c-blog__main">
          <blog-list-post
            v-for="(post, i) in featuredPosts"
            :key="i"
            :post="post"
            :author="post.author?.name"
            no-button
          />
        </div>
        <div class="c-blog__side">
          <blog-list-post
            v-for="(post, i) in sidePosts"
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
          v-for="(post, i) in morePosts"
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
const { t, te, locale } = useI18n();

const { data: allCount } = await useAsyncData("allCount", () =>
  queryContent(locale.value, "blog").count()
);
const totalPosts = computed(() => allCount.value ?? 0);
const hasNext = computed(() => totalPosts.value > 9);

const { data: posts } = await useAsyncData("posts", async () => {
  const [posts, authors] = await Promise.all([
    queryContent(locale.value, "blog")
      .sort({ order: -1, createdAt: -1 })
      .limit(9)
      .find(),
    queryContent(locale.value, "equipo")
      .sort({ order: -1, createdAt: -1 })
      .only(["name", "slug"])
      .find(),
  ]);

  return posts.map((post) => ({
    ...post,
    _path: post._path?.replace("/es", ""),
    author: authors.find((author) => {
      return author.slug === post.author;
    }),
  }));
});

const featuredPosts = computed(() => posts.value?.slice(0, 1));
const sidePosts = computed(() => posts.value?.slice(1, 3));
const morePosts = computed(() => posts.value?.slice(3));

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

// export default {
//   async asyncData({ $content, app }) {
//     const all = await $content(`/${app.i18n.locale}/blog`).fetch();
//     const posts = await $content(`/${app.i18n.locale}/blog`)
//       .sortBy("order", "desc")
//       .sortBy("createdAt", "desc")
//       .limit(9)
//       .fetch();
//     const authors = await $content(`${app.i18n.locale}/equipo`)
//       .only(["name", "slug"])
//       .fetch();

//     return {
//       posts: posts.map((post) => {
//         const authorName = authors.find((author) => {
//           return author.slug === post.author;
//         });
//         return {
//           ...post,
//           author: authorName.name,
//           path: post.path.replace("/es", ""),
//         };
//       }),
//       totalPosts: all.length,
//       hasNext: all.length > 9,
//     };
//   },
// };
</script>
