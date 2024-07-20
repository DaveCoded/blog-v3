interface Post {
    data: {
        tags?: string[];
    };
}

export function getUniqueTagsFromPosts(posts: Post[]) {
    return [...new Set(posts.map((post) => post.data.tags || []).flat())];
}
