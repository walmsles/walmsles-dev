import { defineCollection, z } from 'astro:content';

const workshopsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    venue: z.string(),
    sort_index: z.number().optional(),
    technologies: z.array(z.string()).optional(),
    duration: z.string().optional(),
    level: z.string().optional(),
  }),
});

export const collections = {
  workshops: workshopsCollection,
};
