import React, { useEffect, useState } from 'react';
import API from '../api';
import '.././App.css'; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get('/products/list');
        setProducts(data.products);
      } catch (error) {
        alert('Error fetching products');
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.description} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;