"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.getProduct = async (req, res) => {
            try {
                let listProduct = await productService_1.default.getProduct();
                return res.status(200).json(listProduct);
            }
            catch (e) {
                console.log(e);
            }
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map