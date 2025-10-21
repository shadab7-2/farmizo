import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Farmizo 🌱</div>

      <ul className={styles.navLinks}>
        <li><NavLink to="/" className={styles.link}>Home</NavLink></li>
        <li><NavLink to="/products" className={styles.link}>Products</NavLink></li>
        <li><NavLink to="/blog" className={styles.link}>Blog</NavLink></li>
        <li><NavLink to="/about" className={styles.link}>About</NavLink></li>
        <li><NavLink to="/contact" className={styles.link}>Contact</NavLink></li>
        <li><NavLink to="/cart" className={styles.cart}>🛒Cart</NavLink></li>
        <li><NavLink to="/auth/signup" className={styles.cart}>SignUp</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
