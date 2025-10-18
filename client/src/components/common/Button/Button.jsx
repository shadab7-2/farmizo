import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
