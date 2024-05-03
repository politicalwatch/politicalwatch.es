<template>
  <header class="c-header o-section">
    <NuxtLinkLocale to="index" class="c-header__logo" aria-label="Home">
      <logo />
    </NuxtLinkLocale>
    <button
      class="c-header__menu-toggle"
      :class="{ 'is-active': isMenuActive }"
      @click.prevent="isMenuActive = !isMenuActive"
      aria-label="Toggle menu"
    >
      <span class="bar" />
      <span class="bar" />
      <span class="bar" />
      <span class="text">{{ t("global.menuToggle") }}</span>
    </button>
    <MainMenu :active="isMenuActive" />
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import logo from "@/assets/images/logo.svg?component";

const route = useRoute();
const { t } = useI18n();
const isMenuActive = ref(false);

watch(
  () => route.path,
  (newRoute) => {
    isMenuActive.value = false;
  }
);
</script>
