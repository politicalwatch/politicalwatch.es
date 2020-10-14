<template>
  <section class="c-projects o-section">
    <div class="o-container">
      <page-header
        :title="$t('blocks.projects.title')"
        :subtitle="$t('blocks.projects.subtitle')"
      />
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
        >
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
            {{ $t('blocks.projects.button') }}
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Projects',
  computed: {
    projects () {
      return this.$parent.projects
    }
  }
}
</script>
