<template>
  <article class="c-list-post" :class="{ 'c-list-post--noimage': noImage }">
    <NuxtLinkLocale v-if="!noImage" :to="post._path">
      <img
        :src="post?.image"
        :alt="post?.title"
        class="c-list-post__image"
        width="448"
        height="320"
        loading="lazy"
      />
    </NuxtLinkLocale>
    <h3 class="c-list-post__title">
      <NuxtLinkLocale :to="post._path">
        {{ post?.title }}
      </NuxtLinkLocale>
    </h3>
    <div class="c-list-post__wrapper">
      <div v-if="author" class="c-list-post__author">
        <strong>{{ author }}</strong> /
        {{ format(post?.createdAt, "d 'de' MMMM yyyy", { locale: es }) }}
      </div>
      <div class="c-list-post__desc">
        {{ post?.description }}
      </div>
      <NuxtLinkLocale
        v-if="!noButton"
        :to="post._path"
        class="c-button c-button--outline"
      >
        {{ t("blocks.blog.button") }}
      </NuxtLinkLocale>
    </div>
  </article>
</template>

<script setup>
import { format } from "date-fns";
import { es } from "date-fns/locale";

const { t } = useI18n();

const { post, noButton, noImage, author } = defineProps({
  post: {
    type: Object,
    default: () => {},
  },
  noButton: {
    type: Boolean,
    default: false,
  },
  noImage: {
    type: Boolean,
    default: false,
  },
  author: {
    type: String,
    default: "",
  },
});
</script>
