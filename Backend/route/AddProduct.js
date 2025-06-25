import express from "express";
import { Product } from "../database/contorllers/AddProduct.controller.js";
import {sellProduct} from "../database/contorllers/sellsProduct.controller.js"
import { getAllProducts } from "../database/contorllers/getProduct.js";
import { getSellProduct } from "../database/contorllers/getSellProduct.js";
import { updateProduct } from "../database/contorllers/update.product.js";
import { deleteProduct } from "../database/contorllers/deleteProduct.js";
const router =express.Router();
router.route("/inventory/new").post(Product);
router.route("/sellproduct").post(sellProduct);
router.route("/getAllProduct").get(getAllProducts);
router.route("/getAllSellProduct").get(getSellProduct);
router.route("/updateProduct/:id").put(updateProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);
export default router;