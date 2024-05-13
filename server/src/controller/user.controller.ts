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
        const checkUser = await User.findOne({email: email});
        if(checkUser){
            return res.status(400).json({message: "User with this email alread exist, Try another email"});
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

// user sign-in
export const signIn = async (req: Request, res:Response) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Please provide all the details."});
        }
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json({message: "User with this email not found. Try sign up"});
        }
        const checkPassword = bcrypt.compare(user.password, password);
        if(!checkPassword){
            return res.status(400).json({message: "Wrong password or email"});
        }

        console.log(process.env.JWT_KEY);
        
        const token = jwt.sign({_id: user._id}, process.env.JWT_KEY || '');

        return res.status(200).json({message: "Signed in successfully",token});
        
    } catch (error) {
        console.log("Something went wrong while sign in", error);
        return res.status(500).json({message: "Internal server error"});
    }
}