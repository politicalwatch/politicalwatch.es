<template>
  <section class="c-newsletter">
    <div class="c-newsletter__wrapper o-container">
      <div class="c-newslleter__titles">
        <h2 class="c-newsletter__title">
          {{ $t('blocks.newsletter.title') }}
        </h2>
        <h3 class="c-newsletter__subtitle">
          {{ $t('blocks.newsletter.subtitle') }}
        </h3>
      </div>
      <form
        action=""
        class="c-newsletter__form"
        method="post"
        target="_blank"
      >
        <input
          type="email"
          :placeholder="$t('blocks.newsletter.placeholder')"
          required
        >
        <button type="submit" class="c-button">
          {{ $t('blocks.newsletter.send') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter'
}
</script>
