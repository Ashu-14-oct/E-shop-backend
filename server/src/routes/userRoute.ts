import { Router } from "express";

const userR = Router();

userR.get("/", (req, res) => {res.send("hi")});

export default userR;