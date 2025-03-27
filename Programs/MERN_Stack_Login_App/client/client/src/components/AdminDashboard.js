import React from 'react';
import { Link } from 'react-router-dom';
import '.././App.css'; // Import the CSS file

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <Link to="/add-product">Add Product</Link>
      <Link to="/list-products">List Products</Link>
    </div>
  );
};

export default AdminDashboard;