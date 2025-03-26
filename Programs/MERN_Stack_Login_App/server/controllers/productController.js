const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    // Create a new product
    const newProduct = new Product({ name, description, price });
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getProducts = async (req, res) => {
  try {
    // Fetch all products
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
