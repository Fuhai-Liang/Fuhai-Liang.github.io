import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(""),
    category: z.enum(["project", "experience", "video", "life", "note"]).default("note"),
    project: z.enum(["weather-agent", "scga", "rag", "other"]).optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
