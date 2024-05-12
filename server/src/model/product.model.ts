import mongoose, { Document } from "mongoose";

interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
    category?: string;
    discount?: number;
    event?: string;
}

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    discount: {
        type: Number,
        default: 0
    },
    event: {
        type: String
    }
}, {
    timestamps: true
});

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;