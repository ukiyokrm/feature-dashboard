// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file for styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Navigation</h3>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/users" className="sidebar-link">Users</Link>
        </li>
        <li>
          <Link to="/products" className="sidebar-link">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
