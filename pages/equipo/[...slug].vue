<template>
  <section v-if="member" class="o-container o-section">
    <h2 class="c-team__title">
      {{ t("pages.about.title") }}
    </h2>
    <div class="c-member">
      <div class="c-member__avatar">
        <NuxtImg
            :src="member.avatar"
            :alt="member.name"
            fit="cover"
            loading="lazy"
            />
      </div>
      <div class="c-member__info">
        <h1 class="c-member__info-name">
          {{member.name}}
        </h1>
        <p class="c-member__info-position">
        {{member.position}}
        </p>
        <div class="c-member__info__contact">
          <p class="c-member__info__contact-email">
            <a :href="`mailto:${member.email}`">{{ member.email }}</a>
          </p>
          <ul class="c-member__info__contact-social">
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
        </div>
        <hr/>
        <div class="c-member__info-bio">
          <ContentRenderer :v-if="member">
            <ContentRendererMarkdown :value="member" />
          </ContentRenderer>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import web from "@/assets/images/member-web.svg?component";
import twitter from "@/assets/images/member-twitter.svg?component";
import github from "@/assets/images/member-github.svg?component";
import linkedin from "@/assets/images/member-linkedin.svg?component";

const config = useRuntimeConfig();
const route = useRoute();
const { t, te, locale } = useI18n();

const slug = route.params.slug.join("/");

const { data: member, error } = await useAsyncData(route.path, () =>
  queryContent("equipo", slug)
    .locale(locale.value)
    .sort({ order: -1, createdAt: -1 })
    .findOne()
);

useHead({
  title: `${member.value?.name} | Political Watch`,
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: "description",
      content: member.value?.position,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: member.value?.position,
    },
    {
      property: "og:title",
      hid: "og:title",
      content: `${member.value?.name} | Political Watch`,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: `${config.public.baseURL}${member.value?.avatar}`,
    },
    {
      hid: "twitter:description",
      property: "twitter:description",
      content: member.value?.position,
    },
    {
      property: "twitter:title",
      hid: "twitter:title",
      content: `${member.value?.name} | Political Watch`,
    },
    {
      hid: "twitter:image",
      property: "twitter:image",
      content: `${config.public.baseURL}${member.value?.avatar}`,
    },
  ],
});
</script>
