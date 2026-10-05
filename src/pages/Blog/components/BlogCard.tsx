import { Link } from 'react-router-dom';

import { BlogPostIndexEntry } from '../data/types';
import { formatPostDate } from '../utils/format-date';

const PlaceholderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.6}>
    <path d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
    <path d="M4 16l4.5-4.5a2 2 0 012.8 0L15 15l1.5-1.5a2 2 0 012.8 0L21 16" />
    <circle cx="9" cy="9" r="1.3" fill="white" stroke="none" />
  </svg>
);

export const BlogCard = ({ post }: { post: BlogPostIndexEntry }) => (
  <Link className="bcard" to={`/blog/post/${post.slug}`}>
    <div className="ph">
      <PlaceholderIcon />
    </div>
    <div className="bbody">
      <p className="meta">
        {formatPostDate(post.firstPublishedDate)} · {post.minutesToRead} min de lecture
      </p>
      <h3>{post.title}</h3>
    </div>
  </Link>
);
