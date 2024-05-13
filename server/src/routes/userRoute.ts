import { Router } from "express";
import { signup } from "../controller/user.controller";

const userR = Router();

userR.post("/sign-up", signup);

export default userR;