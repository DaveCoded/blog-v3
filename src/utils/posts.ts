import { getCollection } from 'astro:content';

export async function getAllPosts() {
    const posts = await getCollection('post');
    const notes = await getCollection('note');
    const snippets = await getCollection('snippet');
    return [...posts, ...notes, ...snippets];
}
