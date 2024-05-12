import express from "express";
import router from "./routes";

const PORT = 3000;
const app = express();

app.use('/', router);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});