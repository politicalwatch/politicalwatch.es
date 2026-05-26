<template>
  <section id="themes" class="c-dd-themes">
    <DerechosDigitalesThemeCard
      v-for="(theme, i) in themes"
      :key="theme.path"
      :theme="theme"
      :index="i"
      @open="openModal"
    />

    <DerechosDigitalesThemeModal
      v-model="isOpen"
      :theme="selectedTheme"
    />
  </section>
</template>

<script setup lang="ts">
const { data: themes } = await useDdThemes();

const selectedTheme = ref<Record<string, any> | null>(null);
const isOpen = ref(false);

function openModal(theme: Record<string, any>) {
  selectedTheme.value = theme;
  isOpen.value = true;
}
</script>
