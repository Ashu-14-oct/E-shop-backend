import { Router } from "express";
import { categoryProduct, createProduct, productEvent, searchedProduct, updateProduct } from "../controller/product.controller";
import { validateProduct } from "../middleware/validateBody";
const router = Router();

router.post('/create-product', validateProduct,createProduct);

// get product with a specific event
router.get('/:event', productEvent);

// searched product
router.get('/item/:searched', searchedProduct);

// categories product
router.get('/category/:item', categoryProduct);

// update a product
router.patch('/update/:id', updateProduct);

export default router;