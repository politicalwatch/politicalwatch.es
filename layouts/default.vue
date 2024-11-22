<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Body>
        <MainHeader />
        <slot />
        <Newsletter />
        <MainFooter />
        <Cookies />
      </Body>
    </Html>
  </div>
</template>

<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  dir: true,
  seo: true,
  key: "id",
});
</script>
