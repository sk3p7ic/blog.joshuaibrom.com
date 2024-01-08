import type { Post } from '$lib/postTypes';
import { error, type Load } from '@sveltejs/kit';

type Grouping = {
  year: string;
  months: {
    month: string;
    posts: Post[];
  }[];
};

export const load: Load = async ({ fetch, params }) => {
  try {
    const posts: Post[] = await (await fetch(`/api/posts`)).json();
    const groupedPosts: Grouping[] = [];
    posts.forEach((post) => {
      const [y, m] = post.date.split('-').slice(0, 2);
      let yearIndex = groupedPosts.findIndex((group) => group.year === y);
      if (yearIndex == -1) {
        groupedPosts.push({
          year: y,
          months: [],
        });
        yearIndex = groupedPosts.length - 1;
      }
      let monthIndex = groupedPosts[yearIndex].months.findIndex(
        (group) => group.month === m,
      );
      if (monthIndex == -1) {
        groupedPosts[yearIndex].months.push({
          month: m,
          posts: [],
        });
        monthIndex = groupedPosts[yearIndex].months.length - 1;
      }
      groupedPosts[yearIndex].months[monthIndex].posts.push(post);
    });
    return {
      posts,
      groupedPosts,
    };
  } catch (err) {
    throw error(404, `Could not find post '${params.slug}'.`);
  }
};
