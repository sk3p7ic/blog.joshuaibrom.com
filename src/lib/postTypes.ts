export type Tags = string;

export type Post = {
  title: string;
  slug: string;
  description: string;
  featuredImage?: string;
  date: string;
  tags: Tags[];
  published: boolean;
};
