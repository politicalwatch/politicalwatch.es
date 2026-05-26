<template>
  <section id="ejes" class="c-dd-themes">
    <DerechosDigitalesThemeCard
      v-for="(eje, i) in ejes"
      :key="eje.path"
      :eje="eje"
      :index="i"
      @open="openModal"
    />

    <DerechosDigitalesThemeModal
      v-model="isOpen"
      :eje="selectedEje"
    />
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const collection = `dd_themes_${locale.value}` as 'dd_themes_es' | 'dd_themes_en';

const { data: ejes } = await useAsyncData('dd-ejes', () =>
  queryCollection(collection).order('order', 'ASC').all()
);

const selectedEje = ref<Record<string, any> | null>(null);
const isOpen = ref(false);

function openModal(eje: Record<string, any>) {
  selectedEje.value = eje;
  isOpen.value = true;
}
</script>
