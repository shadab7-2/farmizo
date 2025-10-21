import React from 'react';
import styles from './AuthLayout.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer/Footer';

const AuthLayout = ({ children }) => {
  return (
      <>
      <Navbar/>
    <div className={styles.authWrapper}>
      <div className={styles.authBox}>
        {children}
      </div>
      <main><Outlet/></main>
    </div>
    <Footer></Footer>
      </>
  );
};

export default AuthLayout;
