import mongoose, { Document } from "mongoose";

interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
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