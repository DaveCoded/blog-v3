import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        description: z.string(),
        pubDate: z.coerce.date(),
        noRSS: z.boolean().optional(),
        tags: z.string().min(1).array().min(1),
    }),
});

const notes = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        noRSS: z.boolean().optional(),
        tags: z.string().min(1).array().min(1),
    }),
});

const snippets = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        noRSS: z.boolean().optional(),
        tags: z.string().min(1).array().min(1),
    }),
});

export const collections = { posts, notes, snippets };
