const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: [true, "Product name is required"]
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be a non-negative value"]
    },
    availableStock: {
        type: Number,
        required: [true, "Available stock is required"],
        min: [0, "Available stock must be a non-negative value"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);
