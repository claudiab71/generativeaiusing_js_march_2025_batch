const express = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');
const router = express.Router();

// Admin can add products
router.post('/add', verifyToken, checkRole(['admin']), addProduct);

// Admin and customer can view products
router.get('/list', verifyToken, checkRole(['admin', 'customer']), getProducts);

module.exports = router;
