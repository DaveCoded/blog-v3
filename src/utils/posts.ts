import { getCollection } from 'astro:content';

export async function getAllPosts() {
    const posts = await getCollection('posts');
    const notes = await getCollection('notes');
    const snippets = await getCollection('snippets');
    return [...posts, ...notes, ...snippets];
}
