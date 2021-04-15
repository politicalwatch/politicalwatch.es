<template>
  <section class="c-newsletter" :class="{ 'c-newsletter--light' : light }">
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
        action="https://ciecode.us19.list-manage.com/subscribe/post"
        class="c-newsletter__form"
        method="post"
        target="_blank"
      >
        <input
          type="hidden"
          name="u"
          value="47ab67b8539c57ebb22f927b0"
        >
        <input
          type="hidden"
          name="id"
          value="c933744c08"
        >
        <input
          type="email"
          name="MERGE0"
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
  name: 'Newsletter',
  props: {
    light: Boolean
  }
}
</script>
