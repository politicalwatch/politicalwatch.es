<template>
  <section v-if="isOpen" class="c-cookies">
    <div class="o-container">
      <p>{{ t("blocks.cookies.message") }}</p>
      <p>
        <a href="#" class="c-button" @click.prevent="accept">{{
          t("blocks.cookies.accept")
        }}</a>
        <a href="#" class="c-button c-button--outline" @click.prevent="deny">{{
          t("blocks.cookies.reject")
        }}</a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const { gtag, initialize } = useGtag();

const isOpen = ref(false);

onMounted(() => {
  if (localStorage.getItem("GDPR:accepted") === null) {
    isOpen.value = true;
  }
});

const deny = () => {
  if (process.browser) {
    isOpen.value = false;
    localStorage.setItem("GDPR:accepted", false);
  }
};

const accept = () => {
  if (process.browser) {
    initialize();
    gtag("consent", "update", {
      ad_user_data: "granted",
      ad_personalization: "granted",
      ad_storage: "granted",
      analytics_storage: "granted",
    });
    localStorage.setItem("GDPR:accepted", true);
    isOpen.value = false;
  }
};

const getGDPR = () => {
  if (process.browser) {
    return localStorage.getItem("GDPR:accepted");
  }
};
</script>
