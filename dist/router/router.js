"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
exports.router = (0, express_1.Router)();
exports.router.get("/", productController_1.default.getProduct);
//# sourceMappingURL=router.js.map