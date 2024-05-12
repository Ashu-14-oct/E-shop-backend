import { Router } from "express";
import { categoryProduct, createProduct, productEvent, searchedProduct, updateProduct } from "../controller/product.controller";
import { validateProduct } from "../middleware/validateBody";
const router = Router();

router.post('/product/create-product', validateProduct,createProduct);

// get product with a specific event
router.get('/product/:event', productEvent);

// searched product
router.get('/product/item/:searched', searchedProduct);

// categories product
router.get('/product/category/:item', categoryProduct);

// update a product
router.patch('/product/update/:id', updateProduct);

export default router;