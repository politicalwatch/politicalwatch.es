<template>
  <section v-if="post" class="o-container c-post o-section">
    <OnlyInSpanish origin="blog" class="o-section" />

    <header class="c-post__header">
      <NuxtImg
        class="c-post__image"
        :src="post?.image"
        :alt="post?.title"
        sizes="100vw xs:320px sm:640px md:768px lg:1024px xl:1120px"
      />
      <h1 class="c-post__title">
        {{ post?.title }}
      </h1>
    </header>
    <div class="c-post__meta">
      <div class="c-post__author" v-if="author">
        <NuxtImg
          :src="author.avatar"
          :alt="author.name"
          width="64"
          height="64"
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

    <ContentRenderer v-if="post" :value="post" class="c-post__content o-section" />

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

<script setup lang="ts">
import { format } from "date-fns";
import { es } from "date-fns/locale";
import OnlyInSpanish from "@/components/global/OnlyInSpanish.vue";
import twitter from "@/assets/images/share-twitter.svg?component";
import whatsapp from "@/assets/images/share-whatsapp.svg?component";
import facebook from "@/assets/images/share-facebook.svg?component";
import telegram from "@/assets/images/share-telegram.svg?component";
import linkedin from "@/assets/images/share-linkedin.svg?component";

const config = useRuntimeConfig();
const route = useRoute();
const { t, locale } = useI18n();

const slug = route.params.slug.join("/");
const blogCollection = `blog_${locale.value}` as 'blog_es' | 'blog_en';
const teamCollection = `team_${locale.value}` as 'team_es' | 'team_en';

const { data: post, error } = await useAsyncData(route.path, () =>
  queryCollection(blogCollection)
    .path(`/${locale.value}/blog/${slug}`)
    .first()
);

const { data: author } = await useAsyncData(
  `author-${route.path}`,
  async () => {
    if (!post.value?.author) return null;

    return queryCollection(teamCollection)
      .path(`/${locale.value}/equipo/${post.value?.author}`)
      .select('name', 'avatar')
      .first();
  }
);

const { data: related } = await useAsyncData(
  `related-${route.path}`,
  async () => {
    if (!post.value?.related) return null;

    const [posts, authors] = await Promise.all([
      queryCollection(blogCollection)
        .where('slug', 'IN', post.value?.related)
        .all(),
      queryCollection(teamCollection)
        .order('order', 'DESC')
        .select('name', 'slug')
        .all(),
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
      property: "og:description",
      content: post.value?.description || post.value?.title,
    },
    {
      property: "og:title",
      content: `${post.value?.title} | Political Watch`,
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: `${config.public.baseURL}${route.path}`,
    },
    {
      property: "og:image",
      content: `${config.public.baseURL}${post.value?.image}`,
    },
    {
      property: "twitter:description",
      content: post.value?.description || post.value?.title,
    },
    {
      property: "twitter:title",
      content: `${post.value?.title} | Political Watch`,
    },
    {
      property: "twitter:image",
      content: `${config.public.baseURL}${post.value?.image}`,
    },
  ],
});
</script>

<style lang="scss" scoped>
.c-post {
  &__header {
    position: relative;
    margin-bottom: gap(4);
  }

  &__image {
    display: block;
    margin: 0;
    width: 100%;
  }

  &__title {
    font-family: $font-secondary;
    font-size: rem(24px);
    font-weight: bold;
    line-height: 1.33;
    color: $brand;

    @media (min-width: $md) {
      margin: 0;
      font-size: rem(40px);
      line-height: 1.2;
      background-color: $white;
      padding: gap(8) gap(12) 0 0;
      position: absolute;
      bottom: 0;
      max-width: 75%;
    }
  }

  &__meta {
    max-width: $container-small-px;
    margin-bottom: gap(4);

    @media (min-width: $md) {
      display: flex;
      justify-content: space-between;
      vertical-align: center;
    }
  }

  &__author {
    color: $brand;
    line-height: 1.71;
    margin-bottom: gap(4);
    padding-top: 1px;

    @media (min-width: $md) {
      margin-bottom: 0;
      flex: 1;
    }

    &-avatar {
      width: gap(8);
      height: gap(8);
      object-fit: cover;
      display: block;
      float: left;
      border-radius: 50%;
      margin: 0 gap(2) 0 0;
    }

    &-name {
      font-size: rem(18px);
      margin: gap(0.5) 0 0 0;
      font-weight: bold;
    }

    &-date {
      font-size: rem(14px);
      margin: 0;
    }
  }

  &__share {
    font-size: rem(14px);
    font-weight: bold;
    line-height: 1.71;
    color: $brand;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    a {
      display: inline-block;
      margin: 0 gap(1);

      &:first-of-type {
        margin-left: gap(2);
      }
    }
  }

  &__content {
    max-width: $container-small-px;

    h1 {
      @include th1;

      & {
        margin: gap(6) 0 gap(4) 0;
        background-color: transparent;
        color: $brand;
        padding: 0;
        text-transform: none;
      }
    }

    h2 {
      @include th2;

      & {
        margin: gap(6) 0 gap(4) 0;
        background-color: transparent;
        color: $brand;
        padding: 0;
        text-transform: none;
      }
    }

    h3 {
      @include th3;

      & {
        margin: gap(6) 0 gap(4) 0;
        background-color: transparent;
        color: $brand;
      }
    }

    h4 {
      @include th4;

      & {
        margin: gap(6) 0 gap(4) 0;
      }
    }

    h5,
    h6 {
      color: $brand;
    }

    img.centered {
      display: block;
      margin: auto;
    }
  }
}
</style>
