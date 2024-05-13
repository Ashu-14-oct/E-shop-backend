import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./routes";
import "./config/mongoose";
import userR from "./routes/userRoute";

const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/product', router);
app.use('/user', userR);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});