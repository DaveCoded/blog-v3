import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        noRSS: z.boolean().optional(),
        tags: z.string().array().optional(),
    }),
});

const notes = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        noRSS: z.boolean().optional(),
        tags: z.string().array().optional(),
    }),
});

const snippets = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        noRSS: z.boolean().optional(),
        tags: z.string().array().optional(),
    }),
});

export const collections = { posts, notes, snippets };
