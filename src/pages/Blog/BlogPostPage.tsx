import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { useUpdateMeta } from '@/common/utils/use-update-meta';
import { RicosViewer, quickStartViewerPlugins } from '@wix/ricos';
import '@wix/ricos/css/all-plugins-viewer.css';

import './assets/css/blog.css';
import { ArticleLayout } from './components/ArticleLayout';
import { BlogPostFull, BlogPostIndexEntry } from './data/types';

const plugins = quickStartViewerPlugins();

const PostMeta = ({ post }: { post: BlogPostFull }): null => {
  useUpdateMeta(`${post.title} | Blog BIRDIA`, post.excerpt || `${post.title} — article du blog BIRDIA.`);
  return null;
};

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostFull | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostIndexEntry[]>([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setPost(null);
    setNotFound(false);

    fetch(`/blog-data/posts/${slug}.json`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(setPost)
      .catch(() => setNotFound(true));

    fetch('/blog-data/index.json')
      .then((res) => res.json())
      .then((posts: BlogPostIndexEntry[]) => setRelatedPosts(posts.filter((p) => p.slug !== slug).slice(0, 3)))
      .catch(() => setRelatedPosts([]));
  }, [slug]);

  if (notFound) return <Navigate to="/blog" replace />;
  if (!post) return null;

  return (
    <>
      <PostMeta post={post} />
      <ArticleLayout
        title={post.title}
        firstPublishedDate={post.firstPublishedDate}
        minutesToRead={post.minutesToRead}
        author={post.author}
        relatedPosts={relatedPosts}
      >
        <RicosViewer content={post.richContent} plugins={plugins} />
      </ArticleLayout>
    </>
  );
};
