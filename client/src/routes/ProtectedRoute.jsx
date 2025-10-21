import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // your custom auth hook

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // check if user is logged in

  if (!user) {
    // user not logged in → redirect to login
    return <Navigate to="/auth/login" replace />;
  }

  // user logged in → render children
  return children;
};

export default ProtectedRoute;
