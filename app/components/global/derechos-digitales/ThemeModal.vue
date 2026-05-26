<template>
  <dialog
    ref="dlg"
    class="c-dd-theme-modal"
    :aria-labelledby="theme ? `dd-modal-title-${theme.order}` : undefined"
    @close="onClose"
    @click="onBackdropClick"
  >
    <div class="c-dd-theme-modal__inner" v-if="theme">
      <header class="c-dd-theme-modal__header">
        <img
          src="/images/landing-derechos-digitales/abstract-lines.svg"
          alt=""
          aria-hidden="true"
          class="c-dd-theme-modal__header-lines"
        />

        <h2
          :id="`dd-modal-title-${theme.order}`"
          class="c-dd-theme-modal__title"
        >{{ theme.title }}</h2>

        <img
          v-if="theme.iconOutline"
          :src="theme.iconOutline"
          alt=""
          aria-hidden="true"
          class="c-dd-theme-modal__icon"
        />

        <button
          class="c-dd-theme-modal__close"
          :aria-label="t('pages.derechosDigitales.close')"
          @click="close"
        >✕</button>
      </header>

      <div class="c-dd-theme-modal__body">
        <div class="c-dd-theme-modal__main">
          <ContentRenderer :value="theme" class="c-dd-theme-modal__prose" />

          <blockquote class="c-dd-discovery">
            <strong class="c-dd-discovery__label">{{ t('pages.derechosDigitales.discovery') }}</strong>
            <p class="c-dd-discovery__text">{{ theme.discovery }}</p>
          </blockquote>

          <h3 class="c-dd-theme-modal__proposal-title">
            {{ t('pages.derechosDigitales.proposalTitle') }}
          </h3>
          <p class="c-dd-theme-modal__proposal-text">{{ theme.proposal }}</p>

          <img
            src="/images/landing-derechos-digitales/abstract-lines.svg"
            alt=""
            aria-hidden="true"
            class="c-dd-theme-modal__bottom-lines"
          />
        </div>

        <aside v-if="theme.relatedReports?.length" class="c-dd-theme-modal__sidebar">
          <h4 class="c-dd-theme-modal__sidebar-title">
            <span>{{ t('pages.derechosDigitales.relatedReports') }}</span>
          </h4>
          <DerechosDigitalesRelatedReportCard
            v-for="(report, i) in theme.relatedReports"
            :key="i"
            :title="report.title"
            :description="report.description"
            :conclusion="report.conclusion"
            :slug="report.slug"
          />
        </aside>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  modelValue: boolean;
  theme: Record<string, any> | null;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const dlg = ref<HTMLDialogElement | null>(null);

watch(
  () => props.modelValue,
  (val) => {
    if (!dlg.value) return;
    if (val) {
      dlg.value.showModal();
    } else {
      dlg.value.close();
    }
  }
);

function close() {
  emit('update:modelValue', false);
}

function onClose() {
  emit('update:modelValue', false);
}

function onBackdropClick(e: MouseEvent) {
  const rect = dlg.value?.getBoundingClientRect();
  if (!rect) return;
  if (
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  ) {
    close();
  }
}
</script>

<style lang="scss" scoped>
.c-dd-theme-modal {
  border: none;
  padding: 0;
  background: $white;
  border-radius: 24px 0 0 24px;
  width: min(92vw, 1140px);
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);

  opacity: 0;
  transform: translateY(24px) scale(0.94);
  transition:
    opacity 320ms ease,
    transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
    overlay 350ms allow-discrete,
    display 350ms allow-discrete;

  &[open] {
    opacity: 1;
    transform: none;
  }

  @starting-style {
    &[open] {
      opacity: 0;
      transform: translateY(24px) scale(0.94);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition:
      opacity 150ms ease,
      overlay 150ms allow-discrete,
      display 150ms allow-discrete;

    @starting-style {
      &[open] {
        opacity: 0;
        transform: none;
      }
    }
  }

  &__header {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 160px;
    padding: gap(6) gap(6) gap(5);
    background-image: url('/images/landing-derechos-digitales/gradient-background.jpg');
    background-size: 100% auto;
    background-position: top left;
    background-repeat: no-repeat;
    overflow: hidden;

    @media (min-width: $md) {
      min-height: 200px;
      padding: gap(8) gap(8) gap(6);
    }
  }

  &__header-lines {
    position: absolute;
    scale: 1.8;
    translate: 18% -45%;
    aspect-ratio: 100 / 65;
    object-fit: contain;
    pointer-events: none;
    mix-blend-mode: soft-light;
    z-index: 0;
  }

  &__title {
    font-family: $font-primary;
    font-size: rem(28px);
    font-weight: 700;
    line-height: 1.2;
    color: $white;
    margin: 0;
    max-width: 60%;
    position: relative;
    z-index: 1;

    @media (min-width: $md) {
      font-size: rem(48px);
    }
  }

  &__icon {
    position: absolute;
    right: -50px;
    bottom: -90px;
    top: auto;
    width: 240px;
    height: 240px;
    mix-blend-mode: soft-light;
    pointer-events: none;
    z-index: 1;

    @media (min-width: $md) {
      width: 320px;
      height: 320px;
      right: -120px;
      bottom: -120px;
    }
  }

  &__close {
    @include basic-transition(opacity);

    position: absolute;
    top: gap(3);
    right: gap(3);
    width: 32px;
    height: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    border: 1.5px solid rgba(255, 255, 255, 0.4);
    color: $white;
    font-size: rem(16px);
    line-height: 1;
    cursor: pointer;
    z-index: 2;

    &:hover {
      opacity: 0.7;
    }
  }

  &__body {
    position: relative;
    padding: gap(6);

    @media (min-width: $sm) {
      display: grid;
      grid-template-columns: 1fr 280px;
      padding: 0;
      align-items: stretch;
    }

    @media (min-width: $md) {
      grid-template-columns: 1fr 360px;
    }
  }

  &__main {
    position: relative;
    overflow: hidden;

    @media (min-width: $sm) {
      padding: gap(8) gap(8) gap(8) gap(8);
    }
  }

  &__prose {
    font-family: $font-primary;
    font-size: rem(16px);
    line-height: 1.78;
    color: $brand;
    margin-bottom: gap(6);

    :deep(p) {
      margin: 0 0 gap(4) 0;
    }
  }

  &__proposal-title {
    font-family: $font-secondary;
    font-size: rem(18px);
    font-weight: 900;
    color: $brand;
    margin: gap(6) 0 gap(3) 0;
  }

  &__proposal-text {
    font-family: $font-primary;
    font-size: rem(15px);
    line-height: 1.78;
    color: $brand;
    margin: 0;
  }

  &__bottom-lines {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    aspect-ratio: 100 / 65;
    object-fit: contain;
    scale: 2;
    translate: -20% 30%;
    transform-origin: bottom left;
    filter: invert(1);
    pointer-events: none;
  }

  &__sidebar {
    background: #f2f2f2;
    border-radius: 8px;
    padding: gap(5) gap(4);

    @media (min-width: $sm) {
      border-radius: 0 0 8px 0;
      padding: gap(4) calc(#{gap(4)} + 5px) gap(8) gap(4);
    }
  }

  &__sidebar-title {
    font-family: $font-secondary;
    font-size: rem(13px);
    font-weight: 900;
    display: block;
    width: fit-content;
    margin: 0 auto gap(3) auto;
    padding: gap(1.5) gap(3);
    background: #e6e6e6;
    border-radius: 6px 6px 0 0;

    @media (min-width: $sm) {
      margin-bottom: 0;
    }

    span {
      color: #70237c;
    }
  }
}

.c-dd-discovery {
  position: relative;
  margin: 0 0 gap(6) gap(-4);
  padding: 0 gap(4);
  background: transparent;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, $dd-gradient-from 0%, $dd-gradient-via 33%, $dd-gradient-via-2 66%, $dd-gradient-to 100%);
  }

  &__label {
    display: block;
    font-family: $font-serif;
    font-size: rem(28px);
    font-weight: 400;
    font-style: italic;
    margin-bottom: gap(2);

    background-image: linear-gradient(90deg, $dd-gradient-from 0%, $dd-gradient-via 33%, $dd-gradient-via-2 66%, $dd-gradient-to 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  &__text {
    font-family: $font-primary;
    font-size: rem(18px);
    font-weight: 400;
    line-height: 1.55;
    color: $medium;
    margin: 0;

    @media (min-width: $md) {
      font-size: rem(20px);
    }
  }
}
</style>
