// src/components/Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear authentication status
    navigate('/'); // Redirect to the login or home page
  };

  return (
    <div className="dashboard-container">
      <Sidebar className="sidebar" />
      <div className="dashboard-content">
        <h2>Welcome Back!</h2>
        <p>Your dashboard is ready to use.</p>
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
