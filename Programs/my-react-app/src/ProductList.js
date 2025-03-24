import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import './ProductList.css'; // Import external CSS for styling

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch product details using async/await
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data); // Set the fetched data
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false); // Set loading to false regardless of success or failure
        }
    };

    // useEffect to call fetchProducts on component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        <p className="product-description">{product.description.substring(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;