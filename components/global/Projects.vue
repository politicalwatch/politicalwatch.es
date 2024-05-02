<template>
  <section id="projects" class="c-projects o-section">
    <div class="o-container">
      <page-header :title="getTitle" :subtitle="getSubtitle" />
    </div>
    <div class="c-projects__wrapper">
      <article
        v-for="(project, i) in projects"
        :key="i"
        class="c-projects__project"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="c-projects__project-image"
        />
        <div class="c-projects__project-wrapper">
          <h3 class="c-projects__project-title">
            {{ project.title }}
          </h3>
          <div class="c-projects__project-subtitle">
            {{ project.subtitle }}
          </div>
          <a
            :href="project.link"
            target="_blank"
            class="c-button c-projects__project-link"
          >
            {{ t("blocks.projects.button") }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

const { title, subtitle, projectLimit, lineOfWork } = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  projectLimit: {
    type: Number,
    default: null,
  },
  lineOfWork: {
    type: String,
    default: null,
  },
});

const getTitle = computed(() => title || t("blocks.projects.title"));
const getSubtitle = computed(() => subtitle || t("blocks.projects.subtitle"));

const { data: projects } = await useAsyncData("proyectos", () => {
  const query = queryContent("proyectos")
    .locale(locale.value)
    .sort({ order: -1 })
    .sort({ createdAt: -1 });

  if (lineOfWork) query.where({ lineOfWork: { $eq: lineOfWork } });
  if (projectLimit) query.limit(projectLimit);

  return query.find();
});
</script>
