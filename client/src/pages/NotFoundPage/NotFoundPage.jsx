// src/pages/NotFoundPage/NotFoundPage.jsx
import styles from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className={styles.backLink}>Go Back Home</Link>
    </div>
  );
};

export default NotFoundPage;
