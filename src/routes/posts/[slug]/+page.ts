import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch (err) {
    throw error(404, `Could not find post '${params.slug}'.`);
  }
};
