"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.getProduct = async () => {
            return await product_1.Product.find();
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map