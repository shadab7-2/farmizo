import React from 'react';
import styles from './CartPage.module.css';

import { MainLayout } from '../../layouts/MainLayout';
import CartItem from '../../features/cart/components/CartItem';

const DUMMY_CART = [
  {
    id: 1,
    name: 'Organic Stevia Powder',
    price: 199,
    quantity: 2,
    image: '/assets/images/stevia.jpg',
  },
  {
    id: 2,
    name: 'Desi Ghee - 500ml',
    price: 499,
    quantity: 1,
    image: '/assets/images/ghee.jpg',
  },
];

const CartPage = () => {
  const total = DUMMY_CART.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
   
      <div className={styles.pageWrapper}>
        <h2 className={styles.heading}>Your Cart</h2>

        {DUMMY_CART.length > 0 ? (
          <>
            <div className={styles.cartItems}>
              {DUMMY_CART.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className={styles.summary}>
              <p>Total: ₹{total}</p>
              <button className={styles.checkoutBtn}>Proceed to Checkout</button>
            </div>
          </>
        ) : (
          <p className={styles.empty}>Your cart is empty.</p>
        )}
      </div>
   
  );
};

export default CartPage;
