import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  ProductPage,
  BlogPage,
  ContactPage,
  AboutPage,
  CartPage,
  LoginPage,
  SignupPage,
} from "../pages";
// import BlogPage from '../pages';
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Pbulic layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
          />
          </Route>
      {/* Auth layout */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<LoginPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
      </Route>
      {/* 404 eror page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
