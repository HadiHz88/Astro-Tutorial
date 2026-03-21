import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;
export type BlogPostData = BlogPost["data"];
export type Tag = BlogPostData["tags"][number];

export type BlogPostPageProps = {
  post: BlogPost;
};

export type TagPageProps = {
  posts: BlogPost[];
};
