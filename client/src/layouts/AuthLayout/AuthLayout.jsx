import React from 'react';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authBox}>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
