<template>
  <section class="c-content o-section">
    <div class="c-content__wrapper">
      <slot />
    </div>
    <nav v-if="withProjectsToc" class="c-projects-toc">
      <div class="c-projects-toc__wrapper">
        <h3 class="c-projects-toc__title">
          {{ t("blocks.projects.title") }}
        </h3>
        <ul class="c-projects-toc__list">
          <li
            v-for="(project, i) in projects"
            :key="i"
            class="c-projects-toc__item"
          >
            <a
              :href="project.link"
              target="_blank"
              class="c-projects-toc__link"
              >{{ project.title }}</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script setup lang="ts">
const { withProjectsToc, projectLimit } = defineProps({
  withProjectsToc: {
    type: Boolean,
    default: false,
  },
  projectLimit: {
    type: Number,
    default: null,
  },
});

const { t, locale } = useI18n();

const { data: projects } = await useAsyncData("proyectos", () => {
  const query = queryContent(locale.value, "proyectos")
    .sort({ order: -1 })
    .sort({ createdAt: -1 });

  if (projectLimit) query.limit(projectLimit);

  return query.find();
});
</script>
