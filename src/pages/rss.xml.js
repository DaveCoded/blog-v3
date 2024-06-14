import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
    /* Selective publishing:
     *
     * Decide what to base this on: drafts? Publish flag? On or off by default? Configurable?
     * Add to collection(s): maybe all collections can extend a base one that includes this?
     * Filter posts (and other types) accordingly for items
     * Make sure links are correct
     */
    const posts = await getCollection('blog');
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/blog/${post.slug}/`,
        })),
    });
}
