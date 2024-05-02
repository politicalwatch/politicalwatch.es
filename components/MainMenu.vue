<template>
  <nav class="c-menu" :class="{ 'is-active': active }">
    <ul class="c-menu__list">
      <li class="c-menu__item">
        <NuxtLinkLocale to="/nosotras">
          {{ t("pages.about.title") }}
        </NuxtLinkLocale>
      </li>
      <li class="c-menu__item">
        <NuxtLinkLocale to="/que-hacemos">
          {{ t("pages.what.title") }}
        </NuxtLinkLocale>
      </li>
      <li class="c-menu__item">
        <NuxtLinkLocale to="/participa">
          {{ t("pages.join.title") }}
        </NuxtLinkLocale>
      </li>
      <li class="c-menu__item">
        <NuxtLinkLocale to="/blog">
          {{ t("pages.blog.title") }}
        </NuxtLinkLocale>
      </li>
      <li
        v-for="locale in availableLocales"
        :key="locale.code"
        class="c-menu__item c-menu__item--lang"
      >
        <NuxtLink :to="switchLocalePath(locale.code)">
          <icon-lang /> {{ locale.code }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";

import iconLang from "@/assets/images/icon-lang.svg?component";

const { active } = defineProps({
  active: Boolean,
});

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((l) => l.code !== locale.value);
});
</script>
