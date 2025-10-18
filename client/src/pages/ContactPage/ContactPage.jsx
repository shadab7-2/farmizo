import React from 'react';
import styles from './ContactPage.module.css';

import { MainLayout } from '../../layouts/MainLayout';

const ContactPage = () => {
  return (
    <MainLayout>
      <div className={styles.pageWrapper}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.subheading}>We’d love to hear from you! Fill out the form below and we’ll get back to you soon.</p>

        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input type="email" placeholder="Your Email" className={styles.input} />
          <textarea placeholder="Your Message" className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
