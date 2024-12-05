import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { getToken } from '../Services/authService';

const PrivateRoute = ({ children, role }) => {
  const token = getToken();
  
  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = jwtDecode(token);

  // Check if the user has the required role
  if (role && decodedToken.role !== role) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default PrivateRoute;
