import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
   
      <div className={styles.pageWrapper}>
        <h2 className={styles.heading}>About Farmizo</h2>
        <p className={styles.intro}>
          Farmizo is more than just a farm — it's a movement rooted in soil and designed for soul. We’re dedicated to providing
          clean, organic, and locally-grown products that support both health and sustainability.
        </p>

        <section className={styles.section}>
          <h3 className={styles.subheading}>🌾 Our Story</h3>
          <p>
            Started in a small village of Uttar Pradesh, Farmizo was born from the dream to bring premium, chemical-free products 
            from rural farms to every home in India. Our journey is grounded in honesty, tradition, and innovation.
          </p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.subheading}>💚 Our Mission</h3>
          <p>
            We empower farmers, preserve nature, and promote a healthier lifestyle. Every product is made with care,
            transparency, and a deep connection to the land.
          </p>
        </section>
      </div>
   
  );
};

export default AboutPage;
