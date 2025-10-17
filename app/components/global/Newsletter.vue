<template>
  <section class="c-newsletter" :class="{ 'c-newsletter--light': light }">
    <div class="c-newsletter__wrapper o-container">
      <div class="c-newslleter__titles">
        <h2 class="c-newsletter__title">
          {{ t("blocks.newsletter.title") }}
        </h2>
        <h3 class="c-newsletter__subtitle">
          {{ t("blocks.newsletter.subtitle") }}
        </h3>
      </div>
      <form
        action="https://ciecode.us19.list-manage.com/subscribe/post"
        class="c-newsletter__form"
        method="post"
        target="_blank"
      >
        <input type="hidden" name="u" value="47ab67b8539c57ebb22f927b0" />
        <input type="hidden" name="id" value="c933744c08" />
        <input
          type="email"
          name="MERGE0"
          :placeholder="t('blocks.newsletter.placeholder')"
          required
        />
        <button type="submit" class="c-button">
          {{ t("blocks.newsletter.send") }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const { light } = defineProps({
  light: {
    type: Boolean,
    default: false,
  },
});

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.c-newsletter {
  background-color: $primary;
  padding: gap(4) 0;
  margin-top: gap(8);

  @media (min-width: $md) {
    margin-top: gap(16);
    padding: gap(8) 0;
  }

  &__wrapper {
    @media (min-width: $md) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  &__title {
    @include th2;

    & {
      color: $brand;
      background-color: $white;
      margin: 0 0 gap(1) 0;
    }
  }

  &__subtitle {
    @include th2;

    & {
      margin: 0 0 gap(4) 0;
    }

    @media (min-width: $md) {
      margin: 0;
    }
  }

  &__form {
    background: $white;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: gap(2);

    @media (min-width: $md) {
      min-width: 400px;
    }

    input {
      padding: gap(1) 0;
      border: 0;
      appearance: none;
      color: $brand;
      font-weight: bold;
      font-size: rem(16px);
      outline: none;
      flex: 1;

      @media (min-width: $md) {
        font-size: rem(18px);
        padding-left: gap(2);
      }

      &::placeholder {
        color: $brand;
      }
    }
  }

  &--light {
    background-color: $light;
    background-image: linear-gradient(to top, rgba(241, 241, 241, 0), #f1f1f1);
  }

  .c-hero + & {
    margin-top: gap(-10);
    padding-top: gap(10);
    padding-bottom: gap(12);

    @media (min-width: $md) {
      padding-top: gap(16);
      margin-top: gap(-16);
    }
  }
}
</style>
