<template>
  <section id="research" class="c-research o-container o-section">
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
              :to="`/investigaciones/${itemTag}`"
              class="c-research__item-tag"
            >
              {{ decodeURIComponent(itemTag).replace(/-/g, " ") }}
            </NuxtLinkLocale>
          </p>
          <h3 class="c-research__item-title">
            {{ item.title }}
          </h3>
          <div class="c-research__item-desc">
            {{ item.description }}
          </div>
          <a
            :href="item.link"
            target="_blank"
            class="c-button c-button--outline c-research__item-link"
          >
            {{ getAnchorText(item.link) }}

            <download v-if="!item.link.includes('http')" />
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import download from "@/assets/images/icon-download.svg?component";

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

const getAnchorText = (link: string) => {
  if (
    link.includes(".pdf") ||
    link.includes(".xls") ||
    link.includes(".xlsx")
  ) {
    return `${t("blocks.research.button")}`;
  }
  return t("blocks.research.buttonLink");
};

const { data: research } = await useAsyncData("investigaciones", () => {
  const query = queryContent("investigaciones")
    .locale(locale.value)
    .sort({ order: -1 })
    .sort({ createdAt: -1 });

  if (lineOfWork) query.where({ lineOfWork: { $eq: lineOfWork } });
  if (tag) query.where({ tags: { $contains: tag } });
  if (researchLimit) query.limit(researchLimit);

  return query.find();
});
</script>
