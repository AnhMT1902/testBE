import {Router} from "express";
import ProductController from "../controller/productController";

export const router = Router();
router.get("/", ProductController.getProduct)