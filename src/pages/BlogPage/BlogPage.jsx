import React from 'react';
import styles from './BlogPage.module.css';

import { MainLayout } from '../../layouts';
import BlogPostPreview from '../../features/blog/components/BlogPostPreview';

const DUMMY_BLOGS = [
  {
    id: 1,
    title: 'How to Grow Stevia at Home',
    excerpt: 'Learn how to grow and maintain stevia plants easily in your own space.',
    date: 'July 15, 2025',
    image: '/assets/images/stevia-blog.jpg',
  },
  {
    id: 2,
    title: 'Top 5 Profitable Crops in India 2025',
    excerpt: 'Explore the best-performing crops for Indian farmers this year.',
    date: 'July 10, 2025',
    image: '/assets/images/crops-blog.jpg',
  },
];

const BlogPage = () => {
  return (
    <MainLayout>
      <div className={styles.pageWrapper}>
        <h2 className={styles.heading}>Farmizo Blog</h2>
        <div className={styles.blogGrid}>
          {DUMMY_BLOGS.map((post) => (
            <BlogPostPreview key={post.id} post={post} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;
