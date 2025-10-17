import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: "page",
      source: {
        include: "**/*.md",
        exclude: [
          "**/blog/**",
          "**/equipo/**",
          "**/proyectos/**",
          "**/investigaciones/**",
        ],
      },
      schema: z.object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
        image: z.string().optional(),
      }),
    }),
    blog: defineCollection({
      type: "page",
      source: "**/blog/**",
      schema: z.object({
        title: z.string(),
        slug: z.string().optional(),
        image: z.string().optional(),
        description: z.string().optional(),
        author: z.string().optional(),
        createdAt: z.string().optional(),
        related: z.array(z.string()).optional(),
      }),
    }),
    equipo: defineCollection({
      type: "page",
      source: "**/equipo/**",
      schema: z.object({
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
      }),
    }),
    proyectos: defineCollection({
      type: "page",
      source: "**/proyectos/**",
      schema: z.object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
        image: z.string().optional(),
        link: z.string().optional(),
        order: z.number().optional(),
        lineOfWork: z.string().optional(),
      }),
    }),
    investigaciones: defineCollection({
      type: "page",
      source: "**/investigaciones/**",
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        link: z.string().optional(),
        tags: z.array(z.string()).optional(),
        createdAt: z.string().optional(),
      }),
    }),
  },
});
