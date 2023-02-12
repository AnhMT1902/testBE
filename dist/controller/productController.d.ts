import { Request, Response } from "express";
declare class ProductController {
    getProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: ProductController;
export default _default;
