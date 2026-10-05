import { useEffect, useState } from 'react';

import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/blog.css';
import { BlogCard } from './components/BlogCard';
import { BlogPostIndexEntry } from './data/types';

const PAGE_SIZE = 12;

export const BlogIndex = () => {
  useUpdateMeta(
    'Blog BIRDIA | Diagnostic toiture, couverture et entretien du bâti',
    'Le blog BIRDIA : diagnostic toiture, charpente, isolation, coûts de couverture et conseils pratiques pour couvreurs, assureurs, collectivités et particuliers.'
  );

  const [posts, setPosts] = useState<BlogPostIndexEntry[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    fetch('/blog-data/index.json')
      .then((res) => res.json())
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="wrap">
          <h1>Le blog BIRDIA</h1>
          <p>Diagnostic toiture, charpente, isolation et entretien du bâti, expliqués simplement.</p>
        </div>
      </section>
      <section className="sec white">
        <div className="wrap">
          {posts.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--muted)' }}>Aucun article pour le moment.</p>
          ) : (
            <>
              <div className="bgrid">
                {visiblePosts.map((post) => (
                  <BlogCard post={post} key={post.slug} />
                ))}
              </div>
              {hasMore && (
                <div style={{ textAlign: 'center', marginTop: 40 }}>
                  <button type="button" className="btn btn-dark" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                    Charger plus
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};
