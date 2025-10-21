import React from 'react';
import styles from './HomePage.module.css';

import { MainLayout } from '../../layouts/MainLayout';
import Button from '../../components/common/Button'

const HomePage = () => {
  return (
  
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Welcome to Farmizo</h1>
          <p className={styles.subheading}>Rooted in Soil. Designed for Soul.</p>
          <Button>Explore Products</Button>
        </div>
      </section>
  
  );
};

export default HomePage;
