import React from 'react';
import { Navigate } from 'react-router-dom';

// Dummy logic for example (replace with real auth check)
const isAuthenticated = true; // change this to your real logic

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
