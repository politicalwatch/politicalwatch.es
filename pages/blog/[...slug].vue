<template>
  <section v-if="post" class="o-container c-post o-section">
    <header class="c-post__header">
      <img class="c-post__image" :src="post?.image" :alt="post?.title" />
      <h1 class="c-post__title">
        {{ post?.title }}
      </h1>
    </header>
    <div class="c-post__meta">
      <div class="c-post__author">
        <img
          :src="author.avatar"
          :alt="author.name"
          class="c-post__author-avatar"
        />
        <p class="c-post__author-name">
          {{ author.name }}
        </p>
        <p class="c-post__author-date">
          {{ format(post?.createdAt, "d 'de' MMMM yyyy", { locale: es }) }}
        </p>
      </div>

      <div class="c-post__share">
        {{ t("global.shareLabel") }}
        <a
          :href="`https://twitter.com/intent/tweet?url=${config.public.baseURL}${route.path}`"
          target="_blank"
        >
          <twitter />
        </a>
        <a
          :href="`https://api.whatsapp.com/send?text=${config.public.baseURL}${route.path}`"
          target="_blank"
        >
          <whatsapp />
        </a>
        <a
          :href="`https://www.facebook.com/sharer/sharer.php?u=${config.public.baseURL}${route.path}`"
          target="_blank"
        >
          <facebook />
        </a>
        <a
          :href="`https://t.me/share/url?url=${config.public.baseURL}${route.path}`"
          target="_blank"
        >
          <telegram />
        </a>
        <a
          :href="`https://www.linkedin.com/shareArticle?mini=true&url=${config.public.baseURL}${route.path}`"
          target="_blank"
        >
          <linkedin />
        </a>
      </div>
    </div>

    <ContentRenderer v-if="post" class="c-post__content o-section">
      <ContentRendererMarkdown :value="post" />
    </ContentRenderer>

    <div v-if="related?.length" class="c-blog">
      <section-header :title="t('blocks.blog.related')" />
      <div class="c-blog__wrapper">
        <BlogListPost
          v-for="(post, i) in related"
          :key="i"
          :post="post"
          :author="post?.author?.name"
          no-button
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { format } from "date-fns";
import { es } from "date-fns/locale";
import twitter from "@/assets/images/share-twitter.svg?component";
import whatsapp from "@/assets/images/share-whatsapp.svg?component";
import facebook from "@/assets/images/share-facebook.svg?component";
import telegram from "@/assets/images/share-telegram.svg?component";
import linkedin from "@/assets/images/share-linkedin.svg?component";

const config = useRuntimeConfig();
const route = useRoute();
const { t, locale } = useI18n();

const slug = route.params.slug.join("/");

const { data: post, error } = await useAsyncData(route.path, () =>
  queryContent("blog", slug)
    .locale(locale.value)
    .sort({ order: -1 })
    .sort({ createdAt: -1 })
    .findOne()
);

const { data: author } = await useAsyncData(
  `author-${route.path}`,
  async () => {
    if (!post.value?.author) return null;

    return queryContent("equipo", post.value?.author)
      .locale(locale.value)
      .sort({ order: -1 })
      .sort({ createdAt: -1 })
      .only(["name", "avatar"])
      .findOne();
  }
);

const { data: related } = await useAsyncData(
  `related-${route.path}`,
  async () => {
    if (!post.value?.related) return null;

    const [posts, authors] = await Promise.all([
      queryContent("blog")
        .locale(locale.value)
        .where({ slug: { $in: post.value?.related } })
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
        return author.slug === post?.author;
      }),
    }));
  }
);

useHead({
  title: `${post.value?.title} | Political Watch`,
  htmlAttrs: {
    lang: "es",
  },
  meta: [
    {
      name: "description",
      content: post.value?.description || post.value?.title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: post.value?.description || post.value?.title,
    },
    {
      property: "og:title",
      hid: "og:title",
      content: `${post.value?.title} | Political Watch`,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: `${config.public.baseURL}${post.value?.image}`,
    },
    {
      hid: "twitter:description",
      property: "twitter:description",
      content: post.value?.description || post.value?.title,
    },
    {
      property: "twitter:title",
      hid: "twitter:title",
      content: `${post.value?.title} | Political Watch`,
    },
    {
      hid: "twitter:image",
      property: "twitter:image",
      content: `${config.public.baseURL}${post.value?.image}`,
    },
  ],
});
</script>
