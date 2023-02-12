import {Product} from "../model/product";

class ProductService {
    getProduct = async () => {
           return await Product.find()
    }
}
export default new ProductService()