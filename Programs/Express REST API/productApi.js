const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory array to store products
let products = [];

// Create a new product
//http://localhost:3000/products  
// data {"name":"product1","price":100}
app.post('/products', (req, res) => {
    const product = req.body;
    product.id = products.length + 1; // Auto-generate ID
    products.push(product);
    res.status(201).json({ message: 'Product created', product });
});
// http://localhost:3000/products 
// Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Get a product by ID
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});
    
// Update a product by ID
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    products[productIndex] = { ...products[productIndex], ...req.body };
    res.json({ message: 'Product updated', product: products[productIndex] });
});

// Delete a product by ID
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    const deletedProduct = products.splice(productIndex, 1);
    res.json({ message: 'Product deleted', product: deletedProduct[0] });
});

// Start the server
app.listen(port, () => {
    console.log(`Product API is running at http://localhost:${port}`);
});
