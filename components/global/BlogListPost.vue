<template>
  <article class="c-list-post" :class="{ 'c-list-post--noimage': noImage }">
    <NuxtLinkLocale v-if="!noImage" :to="post._path">
      <NuxtImg
        :src="post?.image"
        :alt="post?.title"
        class="c-list-post__image"
        fit="cover"
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

<script setup lang="ts">
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

<style lang="scss" scoped>
.c-list-post {
  margin-bottom: gap(4);

  &__image {
    display: block;
    margin: 0;
    width: 100%;
    min-height: 240px;
    object-fit: cover;
  }

  &__title {
    font-family: $font-secondary;
    font-size: rem(24px);
    font-weight: bold;
    line-height: 1.33;
    background-color: $white;
    padding: gap(4) gap(2) 0 gap(2);
    position: relative;
    margin: gap(-10) 0 gap(2) 0;
    min-height: gap(10);
    left: -1px;
    max-width: calc(100% - #{gap(2)});

    @media (min-width: $md) {
      padding-left: 0;
    }

    a {
      color: $brand;
      text-decoration: none;

      &:hover {
        color: $primary;
      }
    }
  }

  &__author {
    font-size: rem(14px);
    line-height: 1.71;
    margin-bottom: gap(2);
    color: $brand;
  }

  &__desc {
    font-size: rem(16px);
    line-height: 1.5;
    margin-bottom: gap(3);
  }

  &__wrapper {
    padding: 0 gap(4) 0 gap(2);

    @media (min-width: $md) {
      padding-left: 0;
    }
  }

  &--noimage {
    .c-list-post {
      &__title {
        margin-top: 0;
        min-height: 0;
        padding: 0;
        max-width: 100%;
      }

      &__wrapper {
        padding: 0;
      }
    }
  }
}
</style>
