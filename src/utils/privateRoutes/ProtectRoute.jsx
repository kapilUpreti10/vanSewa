/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log("user in protect route page is", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
