<template>
  <header class="c-section-header o-section">
    <div>
      <component :is="type" class="c-section-header__title">
        {{ title }}
      </component>
      <h3 v-if="tag" class="c-section-header__tag">
        {{ tag }}
      </h3>
    </div>
    <NuxtLinkLocale
      v-if="link && button && !filters.length"
      class="c-link"
      :to="link"
    >
      {{ button }}
    </NuxtLinkLocale>
    <div v-if="filters.length" class="c-dropdown">
      <select @change="goToTag">
        <option value="">
          {{ t("global.filtersLabel") }}
        </option>
        <option v-for="item in filters" :key="item" :value="item">
          {{ decodeURIComponent(item).replace(/-/g, " ") }}
        </option>
      </select>
    </div>
  </header>
</template>

<script setup lang="ts">
const router = useRouter();
const { t } = useI18n();

const { title, tag, button, link, type, filters } = defineProps({
  title: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "",
  },
  button: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "h2",
    validator: (type: string) => ["h1", "h2"].includes(type),
  },
  filters: {
    type: Array as () => string[],
    default: () => [],
  },
});

const goToTag = (event: Event) => {
  const selectElement = event.target as HTMLSelectElement;
  const selectedTag = selectElement.value;
  router.push(`/investigaciones/tag/${selectedTag}`);
};
</script>

<style lang="scss" scoped>
.c-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &__title {
    @include th2;

    & {
      margin: 0 0 gap(1) 0;
    }

    @media (min-width: $md) {
      margin-bottom: 0;
    }
  }

  &__tag {
    display: inline-block;
    font-family: $font-secondary;
    font-size: rem(16px);
    font-weight: 800;
    line-height: 1.33;
    padding: gap(1) gap(2);
    border: solid 2px $brand;
    color: $brand;
    margin: gap(1) 0 gap(1) 0;
    text-transform: uppercase;

    @media (min-width: $md) {
      font-size: rem(24px);
      margin-bottom: 0;
    }
  }
}
</style>
