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
        <NuxtImg
          :src="project.image"
          :alt="project.title"
          fit="cover"
          sizes="500px xs:100vw sm:100vw md:50vw lg:50vw xl:50vw 2xl:50vw"
          loading="lazy"
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

const projectsCollection = `projects_${locale.value}` as 'projects_es' | 'projects_en';

const { data: projects } = await useAsyncData("projects", () => {
  let query = queryCollection(projectsCollection)
    .order("order", "DESC");

  if (lineOfWork) query = query.where("lineOfWork", "=", lineOfWork);
  if (projectLimit) query = query.limit(projectLimit);

  return query.all();
});
</script>

<style lang="scss" scoped>
.c-projects {
  &__wrapper {
    @media (min-width: $sm) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__project {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba($primary, 0.25);
    }

    &-image {
      display: block;
      width: 100%;
    }

    &-wrapper {
      position: absolute;
      bottom: gap(6);
      left: gap(6);
      max-width: 70%;

      @media (min-width: $md) {
        max-width: 42%;
        bottom: gap(8);
        left: gap(14);
      }
    }

    &-title {
      @include th4;

      & {
        text-transform: uppercase;
        background-color: $white;
        padding: gap(1) gap(2);
        display: inline-block;
        margin: 0 0 gap(1) 0;
      }

      @media (min-width: $md) {
        font-size: rem(16px);
        line-height: 1.5;
      }
    }

    &-subtitle {
      font-size: rem(14px);
      line-height: 1.71;
      color: $brand;
      background-color: $white;
      padding: gap(1) gap(2);
      display: inline-block;
      margin-bottom: gap(1);
    }
  }

  .c-content &-toc {
    display: none;

    @media (min-width: $md) {
      display: block;
      position: absolute;
      top: 0;
      height: 100%;
      right: 0;
      max-width: 250px;
    }

    &__wrapper {
      @media (min-width: $md) {
        position: sticky;
        top: 0;
      }
    }

    &__title {
      margin-top: 0;
    }

    &__item {
      &::before {
        @media (min-width: $md) {
          background-color: $brand;
          height: 100%;
          top: 0;
        }
      }
    }

    &__link {
      @media (min-width: $md) {
        font-family: $font-secondary;
        font-size: rem(16px);
        color: $brand;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 900;
        line-height: 1.5;
        display: block;
        padding-right: gap(4);
        background: url("@/assets/images/icon-arrow.svg") right gap(0.5) top
          gap(0.5) no-repeat;
      }
    }
  }
}
</style>
