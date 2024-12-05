import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import { getToken, logout } from '../Services/authService';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();  // Get token from localStorage or auth service
    if (token) {
      try {
        const decodedToken = jwtDecode(token);  // Decode the JWT token
        console.log("Decoded Token:", decodedToken);  // Log the decoded token to check its structure

        // Set role from the decoded token
        setRole(decodedToken.role || 'No role found');
      } catch (error) {
        console.error('Failed to decode token', error);
        logout();  // Logout user if token is invalid
        navigate('/login');
      }
    } else {
      navigate('/login');  // Redirect to login if no token is found
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl">Welcome to the Dashboard!</h1>
        <p>Your role: {role ? role : 'No role found'}</p>  {/* Display user role */}

        {/* Conditionally render Admin button if user is an admin */}
        {role === 'admin' && (
          <button 
            onClick={() => navigate('/admin-crud')} 
            className="mt-4 btn btn-primary">
            Go to Admin CRUD
          </button>
        )}

        <button onClick={handleLogout} className="mt-4 btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
