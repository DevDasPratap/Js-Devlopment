const Product = require('../models/Product');

const createProduct = async (req, res) => {
    const body = req.body;
    if (!body || !body.name || !body.price) {
        return res.status(400).json({ message: "Name and price are required" });
    }
    try {
        const product = new Product(body);
        const result = await product.save();
        res.status(201).json({ message: "Product created", result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getProducts = async (req, res) => {
    try {
        const results = await Product.find({});
        res.status(200).json({ message: "Success", data: results });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Product.findById(id);
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Success", data: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const updateProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        if (!body || !body.name || !body.price) {
            return res.status(400).json({ message: "Name and price are required" });
        }
        const updateDoc = { $set: { ...body }, updatedAt: Date.now() };
        const result = await Product.findByIdAndUpdate(id, updateDoc);
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Product.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteById
}
