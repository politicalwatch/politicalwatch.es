<template>
  <section class="c-team o-container o-section">
    <h2 class="c-team__title">
      {{ t("blocks.team.title") }}
    </h2>
    <div class="c-team__wrapper">
      <article v-for="(member, i) in team" :key="i" class="c-team__member">
        <NuxtImg
          :src="member.avatar"
          :alt="member.name"
          fit="cover"
          sizes="500px xs:256px sm:576px md:704px lg:464px xl:352px"
          loading="lazy"
          class="c-team__member-avatar"
        />
        <div class="c-team__member-wrapper">
          <h3 class="c-team__member-name">
            {{ member.name }}
          </h3>
          <h4 class="c-team__member-position">
            {{ member.position }}
          </h4>
          <p class="c-team__member-email">
            <a :href="`mailto:${member.email}`">{{ member.email }}</a>
          </p>
        </div>
        <ul class="c-team__member-social">
          <li v-if="member.web">
            <a :href="member.web" target="_blank"><web /></a>
          </li>
          <li v-if="member.twitter">
            <a :href="member.twitter" target="_blank"><twitter /></a>
          </li>
          <li v-if="member.github">
            <a :href="member.github" target="_blank"><github /></a>
          </li>
          <li v-if="member.linkedin">
            <a :href="member.linkedin" target="_blank"><linkedin /></a>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import web from "@/assets/images/member-web.svg?component";
import twitter from "@/assets/images/member-twitter.svg?component";
import github from "@/assets/images/member-github.svg?component";
import linkedin from "@/assets/images/member-linkedin.svg?component";

const { teamLimit } = defineProps({
  teamLimit: {
    type: Number,
    default: null,
  },
});

const { t, locale } = useI18n();

const { data: team } = await useAsyncData("equipo", () => {
  const query = queryContent("equipo")
    .locale(locale.value)
    .sort({ order: 1, $numeric: true });

  if (teamLimit) query.limit(teamLimit);

  return query.find();
});
</script>

<style lang="scss" scoped>
.c-team {
  &__member-avatar {
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }
}
</style>
