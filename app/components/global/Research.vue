<template>
  <section id="research" class="c-research o-container o-section">
    <OnlyInSpanish origin="research" class="o-section" />

    <SectionHeader
      :title="title || t('blocks.research.title')"
      :button="t('blocks.research.goto')"
      link="/investigaciones"
      :filters="filters"
      :type="titleType"
      :tag="decodeURIComponent(tag).replace(/-/g, ' ')"
    />
    <div class="c-research__wrapper">
      <article v-for="(item, i) in research" :key="i" class="c-research__item">
        <div class="c-research__item-wrapper">
          <p class="c-research__item-tags">
            <NuxtLinkLocale
              v-for="itemTag in item.tags"
              :key="itemTag"
              :to="`/investigaciones/tag/${itemTag}`"
              class="c-research__item-tag"
            >
              {{ decodeURIComponent(itemTag).replace(/-/g, " ") }}
            </NuxtLinkLocale>
          </p>
          <h3 class="c-research__item-title">
            <NuxtLinkLocale :to="getDetailPath(item.path)">
              {{ item.title }}
            </NuxtLinkLocale>
          </h3>
          <div class="c-research__item-desc">
            {{ item.description }}
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import OnlyInSpanish from "@/components/global/OnlyInSpanish.vue";

const { title, tag, titleType, filters, researchLimit, lineOfWork } =
  defineProps({
    title: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      default: "",
    },
    titleType: {
      type: String,
      default: "h2",
      validator: (type: string) => ["h1", "h2"].includes(type),
    },
    filters: {
      type: Array,
      default: () => [],
    },
    researchLimit: {
      type: Number,
      default: null,
    },
    lineOfWork: {
      type: String,
      default: null,
    },
  });

const { t, locale } = useI18n();

const getDetailPath = (path: string) => {
  const slug = path.split("/").pop();
  return `/investigaciones/${slug}`;
};

const researchCollection = `research_${locale.value}` as 'research_es' | 'research_en';

const { data: research } = await useAsyncData(
  tag ? `research-${tag}` : `research-${researchLimit || 'no-limit'}`,
  () => {
    let query = queryCollection(researchCollection)
      .order('createdAt', 'DESC');

    if (lineOfWork) query = query.where('lineOfWork', '=', lineOfWork);
    if (tag) query = query.where('tags', 'LIKE', `%${tag}%`);
    if (researchLimit) query = query.limit(researchLimit);

    return query.all();
  }
);
</script>

<style lang="scss" scoped>
.c-research {
  &__wrapper {
    @media (min-width: $xs) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: gap(4);
    }
  }

  &__item {
    margin-bottom: gap(4);

    @media (min-width: $md) {
      margin-bottom: 0;
    }

    &-title {
      font-family: $font-secondary;
      font-size: rem(18px);
      font-weight: bold;
      line-height: 1.33;
      margin: 0 0 gap(1) 0;
      color: $brand;

      a {
        color: inherit;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    &-desc {
      font-size: rem(14px);
      line-height: 1.71;
      margin-bottom: gap(4);
    }

    &-tags {
      margin: 0 0 gap(2) 0;
    }

    &-tag {
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
      text-decoration: none;

      &:hover {
        box-shadow: 0 0 0 2px $primary;
        color: $white;
      }
    }
  }
}
</style>
