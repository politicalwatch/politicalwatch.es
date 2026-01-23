import { defineContentConfig, defineCollection, z } from "@nuxt/content";

// Shared schemas
const pageSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  image: z.string().optional(),
});

const blogSchema = z.object({
  title: z.string(),
  slug: z.string().optional(),
  image: z.string().optional(),
  description: z.string().optional(),
  author: z.string().optional(),
  createdAt: z.string().optional(),
  related: z.array(z.string()).optional(),
});

const teamSchema = z.object({
  name: z.string().optional(),
  slug: z.string().optional(),
  position: z.string().optional(),
  email: z.string().optional(),
  avatar: z.string().optional(),
  web: z.string().optional(),
  bluesky: z.string().optional(),
  twitter: z.string().optional(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  order: z.number().optional(),
});

const projectsSchema = z.object({
  title: z.string().optional(),
  subtitle: z.string().optional(),
  image: z.string().optional(),
  link: z.string().optional(),
  order: z.number().optional(),
  lineOfWork: z.string().optional(),
});

const researchSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  link: z.string().optional(),
  tags: z.array(z.string()).optional(),
  createdAt: z.string().optional(),
});

export default defineContentConfig({
  collections: {
    // Spanish collections
    pages_es: defineCollection({
      type: "page",
      source: {
        include: "es/**/*.md",
        exclude: [
          "es/blog/**",
          "es/equipo/**",
          "es/proyectos/**",
          "es/investigaciones/**",
        ],
      },
      schema: pageSchema,
    }),
    blog_es: defineCollection({
      type: "page",
      source: "es/blog/**",
      schema: blogSchema,
    }),
    team_es: defineCollection({
      type: "page",
      source: "es/equipo/**",
      schema: teamSchema,
    }),
    projects_es: defineCollection({
      type: "page",
      source: "es/proyectos/**",
      schema: projectsSchema,
    }),
    research_es: defineCollection({
      type: "page",
      source: "es/investigaciones/**",
      schema: researchSchema,
    }),

    // English collections
    pages_en: defineCollection({
      type: "page",
      source: {
        include: "en/**/*.md",
        exclude: [
          "en/blog/**",
          "en/equipo/**",
          "en/proyectos/**",
          "en/investigaciones/**",
        ],
      },
      schema: pageSchema,
    }),
    blog_en: defineCollection({
      type: "page",
      source: "en/blog/**",
      schema: blogSchema,
    }),
    team_en: defineCollection({
      type: "page",
      source: "en/equipo/**",
      schema: teamSchema,
    }),
    projects_en: defineCollection({
      type: "page",
      source: "en/proyectos/**",
      schema: projectsSchema,
    }),
    research_en: defineCollection({
      type: "page",
      source: "en/investigaciones/**",
      schema: researchSchema,
    }),
  },
});
