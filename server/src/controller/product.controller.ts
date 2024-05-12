import { Request, Response } from "express";
import Product from "../model/product.model";
import { validationResult } from "express-validator";


// product creation endpoint
export const createProduct =  async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);
        // console.log(req.body);
        
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        const {name, price, description, event, discount} = req.body;
        const newProduct = await Product.create({
            name,
            price,
            description,
            event,
            discount,
        });
        if(!newProduct){
            return res.status(400).json({ message: 'Failed to create product' });
        }
        return res.status(201).json({message: "Product added successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
    }
}