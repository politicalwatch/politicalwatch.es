<template>
  <section v-if="research" class="o-container c-research-detail o-section">
    <OnlyInSpanish origin="research" class="o-section" />

    <SectionHeader
      :title="title || t('blocks.research.title')"
      :button="t('blocks.research.goto')"
      link="/investigaciones"
      :type="titleType"
    />

    <h1 class="c-research-detail__title">
        {{ research?.title }}
    </h1>

    <div class="c-research-detail__layout">
      <main class="c-research-detail__main">
        <ContentRenderer
          v-if="research"
          :value="research"
          class="c-research-detail__content"
        >
          <template #empty>
            <p v-if="research?.description" class="c-research-detail__description">
              {{ research.description }}
            </p>
          </template>
        </ContentRenderer>
      </main>

      <aside class="c-research-detail__sidebar">
        <div class="c-research-detail__meta">

          <div v-if="research?.tags?.length" class="c-research-detail__tags">
            <NuxtLinkLocale
              v-for="tag in research.tags"
              :key="tag"
              :to="`/investigaciones/tag/${tag}`"
              class="c-research-detail__tag"
            >
              {{ decodeURIComponent(tag).replace(/-/g, " ") }}
            </NuxtLinkLocale>
          </div>

          <a
            v-if="research?.link"
            :href="research.link"
            target="_blank"
            class="c-button c-button--outline c-research-detail__download"
          >
            {{ getAnchorText(research.link) }}
            <download v-if="!research.link.includes('http')" />
          </a>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { format } from "date-fns";
import { es } from "date-fns/locale";
import OnlyInSpanish from "@/components/global/OnlyInSpanish.vue";
import download from "@/assets/images/icon-download.svg?component";

const config = useRuntimeConfig();
const route = useRoute();
const { t, locale } = useI18n();

const slug = route.params.slug as string;
const researchCollection = `research_${locale.value}` as
  | "research_es"
  | "research_en";

const { data: research, error } = await useAsyncData(route.path, () =>
  queryCollection(researchCollection)
    .path(`/${locale.value}/investigaciones/${slug}`)
    .first()
);

const getAnchorText = (link: string) => {
  if (
    link.includes(".pdf") ||
    link.includes(".xls") ||
    link.includes(".xlsx")
  ) {
    return t("blocks.research.button");
  }
  return t("blocks.research.buttonLink");
};

useHead({
  title: `${research.value?.title} | Political Watch`,
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: "description",
      content: research.value?.description || research.value?.title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: research.value?.description || research.value?.title,
    },
    {
      property: "og:title",
      hid: "og:title",
      content: `${research.value?.title} | Political Watch`,
    },
    {
      hid: "twitter:description",
      property: "twitter:description",
      content: research.value?.description || research.value?.title,
    },
    {
      property: "twitter:title",
      hid: "twitter:title",
      content: `${research.value?.title} | Political Watch`,
    },
  ],
});
</script>

<style lang="scss" scoped>
.c-research-detail {

  &__title {
    font-family: $font-secondary;
    font-size: rem(24px);
    font-weight: bold;
    line-height: 1.33;
    color: $brand;
    margin-bottom: gap(6);

    @media (min-width: $md) {
      font-size: rem(40px);
      line-height: 1.2;
    }
  }

  &__layout {
    @media (min-width: $md) {
      display: grid;
      grid-template-columns: 1fr 280px;
      gap: gap(8);
    }
  }

  &__sidebar {
    margin-bottom: gap(6);

    @media (min-width: $md) {
      margin-bottom: 0;
    }
  }

  &__meta {
    @media (min-width: $md) {
      position: sticky;
      top: gap(4);
    }
  }

  &__date {
    display: flex;
    align-items: center;
    gap: gap(1);
    font-size: rem(14px);
    line-height: 1.71;
    color: $brand;
    margin: 0 0 gap(3) 0;

    svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
  }

  &__tags {
    margin-bottom: gap(4);
  }

  &__tag {
    @include basic-transition(box-shadow);

    font-family: $font-secondary;
    font-size: rem(14px);
    font-weight: bold;
    line-height: 1.14;
    color: $white;
    background-color: $primary;
    padding: gap(0.5) gap(1);
    display: inline-block;
    margin-right: gap(1);
    margin-bottom: gap(1);
    text-decoration: none;

    &:hover {
      box-shadow: 0 0 0 2px $primary;
      color: $white;
    }
  }

  &__download {
    display: inline-flex;
    align-items: center;
    gap: gap(1);

    svg {
      width: 16px;
      height: 16px;
    }
  }

  &__main {
    max-width: $container-small-px;
  }

  &__description {
    font-size: rem(18px);
    line-height: 1.6;
    color: $brand;
    margin: 0 0 gap(6) 0;
  }

  &__content {
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
  }
}
</style>
