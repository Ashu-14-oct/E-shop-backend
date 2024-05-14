import { Router } from "express";
import { signIn, signup } from "../controller/user.controller";
import { validateUser } from "../middleware/validateBody";

const userR = Router();

// sign-up and sign-in
userR.post("/sign-up", validateUser,signup);
userR.post("/sign-in", signIn);


export default userR;