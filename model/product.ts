import {IProduct} from "../interface/IProduct";
import {Schema, model} from "mongoose";

const productSchema = new Schema<IProduct>({
    name: String,
    quantity: Number
})

const Product = model<IProduct>('Product', productSchema);
export {Product}