import { Router } from "express";
import { createProduct } from "../controller/product.controller";
import { validateProduct } from "../middleware/validateBody";
const router = Router();

router.post('/create-product', validateProduct,createProduct);

export default router;