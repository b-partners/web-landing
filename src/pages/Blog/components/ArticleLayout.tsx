import { ReactNode } from 'react';

import { BlogPostIndexEntry } from '../data/types';
import { formatPostDate } from '../utils/format-date';
import { RelatedPosts } from './RelatedPosts';
import { ShareIcons } from './ShareIcons';

import '../assets/css/blog.css';

type ArticleLayoutProps = {
  title: string;
  firstPublishedDate: string;
  minutesToRead: number;
  relatedPosts: BlogPostIndexEntry[];
  children: ReactNode;
};

export const ArticleLayout = ({ title, firstPublishedDate, minutesToRead, relatedPosts, children }: ArticleLayoutProps) => (
  <div className="blog-page">
    <section className="article-hero">
      <div className="wrap">
        <div className="meta">
          <span>
            {formatPostDate(firstPublishedDate)} · {minutesToRead} min de lecture
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
