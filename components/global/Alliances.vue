<template>
  <section class="c-alliances o-container o-section">
    <h2 class="c-alliances__title">
      {{ t("blocks.alliances.title") }}
    </h2>
    <div class="c-alliances__scroller">
      <div class="c-alliances__wrapper">
        <a
          v-for="(alliance, i) in alliances"
          :key="i"
          :href="alliance.link"
          target="_blank"
          class="c-alliances__item"
        >
          <NuxtImg
            :src="alliance.image"
            :alt="alliance.title"
            fit="contain"
            sizes="160px xs:100px sm:160px"
            loading="lazy"
            class="c-alliances__item-image"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Alliance {
  link: string;
  image: string;
  title: string;
}

const { alliances = [] } = defineProps<{
  alliances: Alliance[];
}>();

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.c-alliances {
  &__title {
    @include th2;

    & {
      margin: 0 0 gap(4) 0;
    }

    @media (min-width: $md) {
      margin-bottom: gap(8);
    }
  }

  &__scroller {
    overflow-x: auto;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-bottom: gap(4);
    flex-wrap: wrap;
  }

  &__item {
    display: block;
    flex: 1 0 100px;
    max-width: 100px;

    @media (min-width: $sm) {
      margin-bottom: gap(4);
      flex: 1 0 160px;
      max-width: 160px;
    }

    &-image {
      object-fit: contain;
      display: block;
      width: 100%;
    }
  }
}
</style>
