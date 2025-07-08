const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one product
router.get('/:id', getProduct, (req, res) => {
    res.json(res.product);
});

// Create one product
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        stock: req.body.stock
    });
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one product
router.patch('/:id', getProduct, async (req, res) => {
    if (req.body.name != null) {
        res.product.name = req.body.name;
    }
    if (req.body.description != null) {
        res.product.description = req.body.description;
    }
    if (req.body.price != null) {
        res.product.price = req.body.price;
    }
    if (req.body.category != null) {
        res.product.category = req.body.category;
    }
    if (req.body.imageUrl != null) {
        res.product.imageUrl = req.body.imageUrl;
    }
    if (req.body.stock != null) {
        res.product.stock = req.body.stock;
    }
    try {
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
