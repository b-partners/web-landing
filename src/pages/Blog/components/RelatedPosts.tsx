import { BlogPostIndexEntry } from '../data/types';
import { BlogCard } from './BlogCard';

export const RelatedPosts = ({ posts }: { posts: BlogPostIndexEntry[] }) => {
  if (posts.length === 0) return null;

  return (
    <section className="related">
      <div className="wrap">
        <h2>À lire aussi</h2>
        <div className="bgrid">
          {posts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};
