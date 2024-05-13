import { Router } from "express";
import { signIn, signup } from "../controller/user.controller";

const userR = Router();

// sign-up and sign-in
userR.post("/sign-up", signup);
userR.post("/sign-in", signIn);

export default userR;