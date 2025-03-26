const Product = require('../models/productModel');

exports.addProduct = async (req, res) => {
    const { name, price } = req.body;
    try {
        const product = new Product({ name, price });
        await product.save();
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
