import { Router } from "express";
import { addProduct, getAllProducts } from "../controllar/product.controllar";
const router : Router = Router();

router.route("/").get(getAllProducts);
router.route("/add").post(addProduct)

export default router;
