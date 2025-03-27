import React from 'react';
import { Link } from 'react-router-dom';
import '.././App.css'; // Import the CSS file

const CustomerDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Customer Dashboard</h2>
      <Link to="/list-products">List Products</Link>
    </div>
  );
};

export default CustomerDashboard;