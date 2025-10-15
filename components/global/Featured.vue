<template>
  <section class="c-featured">
    <h2 v-if="title && featured" class="c-featured__title">
      {{ title }}
    </h2>
    <article class="c-featured__item" v-for="(f, i) in featured" :key="i">
      <div class="c-featured__item-header">
        <h3 class="c-featured__item-title">
          {{ f.title }}
        </h3>
        <div class="c-featured__item-subtitle">
          <h4 class="c-featured__item-subtitle-text">
            {{ f.subtitle }}
          </h4>
        </div>
      </div>
      <div class="c-featured__item-image">
        <NuxtImg
          :src="f.image"
          :alt="f.title"
          fit="cover"
          sizes="50vw xs:100vw"
          loading="lazy"
          class="c-featured__item-image-element"
        />
        <span 
          v-if="f.imageAuthor"
          class="c-featured__item-image-author">
          <b>{{$t('global.source')}}: </b>
          <a :href="f.imageRef" target="_blank">
            {{f.imageAuthor}}
          </a>
        </span>
      </div>
      <div class="c-featured__item-content">
        <p class="c-featured__item-desc">
          {{ f.description }}
        </p>
        <a
          :href="f.link"
          target="_blank"
          class="c-button c-featured__item-more"
        >
          {{ f.button }}
        </a>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
const { title, featured } = defineProps({
  title: {
    type: String,
    default: "",
  },
  featured: {
    type: Array,
    default: () => [],
  },
});

const { t } = useI18n();

</script>

<style lang="scss" scoped>
.c-featured {
  @include container;
  & {
    margin-bottom: gap(18);
  }

  &__title {
    @include th2;

    & {
      margin-top: gap(8);
    }
  }

  &__item {
    position: relative;
    margin-top: gap(8);
    margin-bottom: gap(12);

    @media (min-width: $sm) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "header image"
        "content image";
      gap: 0 gap(8);
      margin-top: gap(12);
      margin-bottom: gap(16);
      padding-top: gap(5);
      padding-left: gap(11);
    }

    @media (min-width: $md) {
      grid-template-columns: 6fr 4fr;
    }

    &-header {
      position: relative;
      @media (min-width: $sm) {
        grid-area: header;
      }

      @media (min-width: $md) {
        padding-top: gap(5);
      }
    }

    &-content {
      @media (min-width: $sm) {
        grid-area: content;
      }
    }

    &-image {
      margin: 0 0 gap(3) gap(-4);
      width: 100vw;
      position: relative;
      display: inline-block;

      @media (min-width: $sm) {
        grid-area: image;
        width: 100%;
        height: 100%;
        min-height: 550px;
      }
    }

    &-image-element {
      display: block;

      @media (min-width: $sm) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media (min-width: $md) {
        height: 100%;
      }
    }
    
    &-image-author {
      padding: gap(1) gap(2);
      background-color: $light;
      position: absolute;
      bottom: -1.5em;
      right: 0;
      font-size: 0.8rem;

      a {
        color: $brand;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    &-title {
      font-family: $font-secondary;
      font-size: rem(40px);
      font-weight: bold;
      line-height: 1.2;
      text-align: left;
      margin: 0 0 gap(3) 0;
      color: $brand;

      @media (min-width: $sm) {
        margin: 0 0 gap(5) 0;
      }

      @media (min-width: $md) {
        font-size: rem(64px);
      }
    }

    &-subtitle {
      @include th3;

      & {
        text-transform: uppercase;
        margin: 0 0 0 gap(-2);
        width: calc(100vw - #{gap(6)});
        position: absolute;
        z-index: 1;
      }

      @media (min-width: $sm) {
        position: relative;
        width: 160%;
        margin: 0;
        padding: gap(1) gap(2) gap(1) 0;
      }
    }

    &-subtitle-text {
      line-height: 1.6;
      background-color: $white;
      padding: 0 gap(2) gap(2) gap(2);
      margin: 0;

      @media (min-width: $sm) {
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
        margin: 0;
        padding: gap(1) gap(2) gap(1) 0;
      }
    }

    &-desc {
      margin-bottom: gap(3);
    }
  }
}
</style>
