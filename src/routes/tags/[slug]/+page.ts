import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
  try {
    const posts = await (await fetch(`/api/tags/${params.slug}`)).json();
    return {
      posts,
      slug: params.slug,
    };
  } catch (err) {
    throw error(500, `Could not retrieve listing.`);
  }
};
