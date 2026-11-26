<template>
  <div>
    <section class="c-blog o-container o-section">
      <page-header
        :title="t('pages.blog.title')"
        :subtitle="t('pages.blog.subtitle')"
        type="h1" />
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
const { t, te } = useI18n();
const routeLocale = useRouteLocale();

const currentPage = parseInt(route.params.number as string);
const blogCollection = `blog_${routeLocale}` as 'blog_es' | 'blog_en';
const teamCollection = `team_${routeLocale}` as 'team_es' | 'team_en';

const { data: allCount } = await useAsyncData(`allCount-${routeLocale}`, () =>
  queryCollection(blogCollection).count()
);

const { data: posts } = await useAsyncData(
  `posts-page-${routeLocale}-${currentPage}`,
  async () => {
    const [posts, authors] = await Promise.all([
      queryCollection(blogCollection)
        .order('createdAt', 'DESC')
        .limit(9)
        .skip(currentPage * 9)
        .all(),
      queryCollection(teamCollection)
        .order('order', 'DESC')
        .select('name', 'slug')
        .all(),
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

useHead({ htmlAttrs: { lang: "es" } });
useSeoMeta({
  title: `${t("pages.blog.title")}: página ${currentPage}`,
  description: te("pages.blog.description") ? t("pages.blog.description") : t("pages.blog.title"),
});
</script>
