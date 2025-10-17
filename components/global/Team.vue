<template>
  <section class="c-team o-container o-section">
    <!--
    <h2 class="c-team__title">
      {{ t("blocks.team.title") }}
    </h2>
    -->
    <div class="c-team__wrapper">
      <article v-for="(member, i) in teamWithLocalePaths" :key="i" class="c-team__member">
        <NuxtLinkLocale :to="member.localePath">
          <div class="zoom">
            <NuxtImg
              :src="member.avatar"
              :alt="member.name"
              fit="cover"
              sizes="500px xs:256px sm:576px md:704px lg:464px xl:352px"
              loading="lazy"
              class="c-team__member-avatar"
            />
          </div>
        </NuxtLinkLocale>
        <div class="c-team__member-wrapper">
          <h3 class="c-team__member-name">
            <NuxtLinkLocale :to="member.localePath">
              {{ member.name }}
            </NuxtLinkLocale>
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
          <li v-if="member.bluesky">
            <a :href="member.bluesky" target="_blank"><bluesky /></a>
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
import bluesky from "@/assets/images/member-bluesky.svg?component";
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
  let query = queryCollection("equipo")
    .where("path", "LIKE", `/${locale.value}/%`)
    .order("order", "ASC");

  if (teamLimit) query = query.limit(teamLimit);

  return query.all();
});

// Strip locale prefix from Content v3 paths for each team member
// Content stores paths as /es/equipo/... or /en/equipo/...
// NuxtLinkLocale expects paths without locale prefix
const teamWithLocalePaths = computed(() => {
  return team.value?.map(member => ({
    ...member,
    localePath: member.path?.replace(/^\/(es|en)/, '') || ''
  })) || [];
});
</script>

<style lang="scss" scoped>
.c-team {
  &__title {
    @include th2;

    & {
      margin: 0 0 gap(4) 0;
    }

    @media (min-width: $md) {
      margin-bottom: gap(8);
    }
  }

  &__wrapper {
    @media (min-width: $xs) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      grid-gap: gap(8) gap(4);
    }
  }

  &__member {
    margin-bottom: gap(4);
    width: 100%;
    color: $brand;
    position: relative;

    @media (min-width: $xs) {
      margin-bottom: 0;
    }

    &:hover {
      .c-team__member-wrapper {
        padding: gap(3) gap(2) 0 0;
        width: 80%;
      }
    }

    .zoom {
      width: 352px;
      overflow: hidden;

      img {
        width: 100%;
        transition: transform 0.5s ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }

    &-avatar {
      display: block;
      width: 100%;
      object-fit: cover;
      aspect-ratio: 1 / 1;
    }

    &-wrapper {
      position: absolute;
      transform: translateY(-99%);
      display: inline-block;
      background: $white;
      padding: gap(2) gap(2) 0 0;
      width: 75%;
      transition: all 0.5s ease;
    }

    &-name {
      font-size: rem(18px);
      font-weight: bold;
      line-height: 1.78;
      margin: 0;
      a {
        color: $brand;
        text-decoration: none;
        &:hover,
        &:active,
        &:visited {
          color: $brand;
        }
      }
    }

    &-position {
      font-size: rem(14px);
      line-height: 1.71;
      font-weight: normal;
      margin: 0;
    }

    &-email {
      @include member-email;
    }

    &-social {
      @include member-social;
    }
  }
}
</style>
