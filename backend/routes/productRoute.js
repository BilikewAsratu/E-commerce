import express from "express";
import productController from "../controllers/productController.js";

const {
    addProduct,
    listProducts,
    removeProduct,
    singleProduct
} = productController;

const productRouter = express.Router();

productRouter.post('/add', addProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/list', listProducts);
productRouter.post('/single', singleProduct);

export default productRouter;