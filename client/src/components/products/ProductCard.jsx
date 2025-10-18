// src/components/products/ProductCard.jsx
import styles from './ProductCard.module.css';

const ProductCard = ({ title, price, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
