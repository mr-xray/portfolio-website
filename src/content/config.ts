import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z
      .object({
        url: z.string().url().optional(),
        alt: z.string().optional(),
      })
      .optional(),
  }),
});
export const collections = {
  blog: blogCollection,
};
