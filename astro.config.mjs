import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://davebernhard.com',
    integrations: [mdx(), sitemap()],

    markdown: {
        shikiConfig: {
            theme: 'nord',
        },
    },
});
