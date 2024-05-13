import { Request, Response } from "express";
import User from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// user sign-up
export const signup = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message: "Provide all the details"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const newUser = {
            id: user._id,
            name: user.name,
            email: user.email,
        }

        return res.status(201).json({message: "sign up successfully", newUser});
    } catch (error) {
        console.log("Something went wrong while sign up", error);
        return res.status(500).json({message: "Internal server error"});
    }
}