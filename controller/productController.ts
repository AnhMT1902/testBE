import {Request, Response} from "express";
import ProductService from "../service/productService";

class ProductController {
    getProduct = async (req: Request, res: Response) => {
        try {
           let listProduct = await ProductService.getProduct()
            return res.status(200).json(listProduct)
        } catch (e) {
            console.log(e)
        }
    }
}
export default new ProductController();