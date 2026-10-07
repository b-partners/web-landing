import { ReactNode } from 'react';

import '../assets/css/blog.css';
import { BlogAuthor, BlogPostIndexEntry } from '../data/types';
import { formatPostDate } from '../utils/format-date';
import { RelatedPosts } from './RelatedPosts';
import { ShareIcons } from './ShareIcons';

type ArticleLayoutProps = {
  title: string;
  firstPublishedDate: string;
  minutesToRead: number;
  author?: BlogAuthor;
  relatedPosts: BlogPostIndexEntry[];
  children: ReactNode;
};

export const ArticleLayout = ({ title, firstPublishedDate, minutesToRead, author, relatedPosts, children }: ArticleLayoutProps) => (
  <div className="blog-page">
    <section className="article-hero">
      <div className="wrap">
        <div className="meta">
          <span>
            {formatPostDate(firstPublishedDate)} · {minutesToRead} min de lecture
            {author && (
              <>
                {' · '}
                Par {author.email ? <a href={`mailto:${author.email}`}>{author.name}</a> : author.name}
              </>
            )}
          </span>
        </div>
        <h1>{title}</h1>
      </div>
    </section>
    <section className="sec white" style={{ paddingTop: 10 }}>
      <div className="prose">{children}</div>
      <ShareIcons />
    </section>
    <RelatedPosts posts={relatedPosts} />
  </div>
);
