import React from 'react';
import styles from './ProductPage.module.css';

import { MainLayout } from '../../layouts/MainLayout';
// import ProductCard from '../../features/products/components/ProductCard';
 
import ProductCard from '../../components/products/ProductCard';
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: 'Organic Stevia Powder',
    price: '₹199',
    image: '/assets/images/stevia.jpg',
  },
  {
    id: 2,
    name: 'Pure Desi Ghee',
    price: '₹499',
    image: '/assets/images/ghee.jpg',
  },
];

const ProductPage = () => {
  return (
    
      <div className={styles.pageWrapper}>
        <h2 className={styles.heading}>Our Farm Products</h2>
        <div className={styles.productGrid}>
          {DUMMY_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    
  );
};

export default ProductPage;
