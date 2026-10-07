import type { RicosDocument } from '@wix/ricos';

export type BlogPostIndexEntry = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  firstPublishedDate: string;
  minutesToRead: number;
};

export type BlogAuthor = {
  name: string;
  email?: string;
};

export type BlogPostFull = BlogPostIndexEntry & {
  richContent: RicosDocument;
  author?: BlogAuthor;
};
