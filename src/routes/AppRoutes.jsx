import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  ProductPage,
  BlogPage,
  ContactPage,
  AboutPage,
  CartPage,
} from '../pages';

import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={
        <ProtectedRoute>
          <CartPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default AppRoutes;
