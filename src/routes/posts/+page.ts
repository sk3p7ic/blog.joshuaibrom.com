import type { Post } from '$lib/postTypes';
import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
  try {
    const posts: Post[] = await (await fetch(`/api/posts`)).json();
    const groupedPosts: Record<string, Record<string, Post[]>> = {};
    posts.forEach((post) => {
      const [y, m] = post.date.split('-').slice(0, 2);
      if (!groupedPosts[y]) groupedPosts[y] = {};
      if (!groupedPosts[y][m]) groupedPosts[y][m] = [post];
      else groupedPosts[y][m].push(post);
    });
    return {
      posts,
      groupedPosts,
    };
  } catch (err) {
    throw error(404, `Could not find post '${params.slug}'.`);
  }
};
