const express = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');

router.post('/add', authenticate('admin'), addProduct);
router.get('/', authenticate(['admin', 'customer']), getProducts);

module.exports = router;
