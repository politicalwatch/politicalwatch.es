<template>
  <section class="c-sections">
    <page-header
      v-if="!hideTitle"
      :title="$t('blocks.linesOfWork.title')"
      :subtitle="$t('blocks.linesOfWork.subtitle')"
    />
    <div class="c-sections__wrapper">
      <article class="c-sections__section">
        <img
          src="/images/democracy.svg"
          :alt="$t('blocks.linesOfWork.democracy.title')"
          class="c-sections__section-img"
        >
        <h3 class="c-sections__section-title">
          {{ $t('blocks.linesOfWork.democracy.title') }}
        </h3>
        <p class="c-sections__section-subtitle">
          {{ $t('blocks.linesOfWork.democracy.subtitle') }}
        </p>
        <a :href="$t('blocks.linesOfWork.democracy.link')" class="c-link">{{ $t('blocks.linesOfWork.democracy.button') }}</a>
      </article>
      <article class="c-sections__section">
        <img
          src="/images/coherence.svg"
          :alt="$t('blocks.linesOfWork.coherence.title')"
          class="c-sections__section-img"
        >
        <h3 class="c-sections__section-title">
          {{ $t('blocks.linesOfWork.coherence.title') }}
        </h3>
        <p class="c-sections__section-subtitle">
          {{ $t('blocks.linesOfWork.coherence.subtitle') }}
        </p>
        <a :href="$t('blocks.linesOfWork.coherence.link')" class="c-link">{{ $t('blocks.linesOfWork.coherence.button') }}</a>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LinesOfWork',
  props: {
    hideTitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>
