import { json } from '@sveltejs/kit';
import type { Post } from '$lib/postTypes';

/// Gets all posts from the `src/posts` directory.
///
/// The `src/posts` directory is scanned for all `.md` files. Each file is
/// expected to have a frontmatter section at the top of the file. The
/// frontmatter is parsed and the file's slug is determined from the file's
/// path. The slug is the file's path relative to the `src/posts` directory
/// without the `.md` extension.
///
/// The posts are sorted by date in descending order (newest first).
async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = [];
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');
    const href = `/posts/${slug}`;
    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug' | 'href'>;
      const post = { ...metadata, slug, href } satisfies Post;
      if (post.published) posts.push(post);
    }
  }
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function GET() {
  const posts = await getAllPosts();
  return json(posts);
}
