import type {Post} from '$lib/postTypes';
import type { PageLoad } from './$types';

type LoadResponse = {
  posts: Post[]
}

export const load: PageLoad = async ({fetch}) => {
  return {posts: await (await fetch('/api/posts')).json()} as LoadResponse;
}
