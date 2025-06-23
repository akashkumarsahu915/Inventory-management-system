import express from "express";
import { Product } from "../database/contorllers/AddProduct.controller.js";
import {sellProduct} from "../database/contorllers/sellsProduct.controller.js"
import { getAllProducts } from "../database/contorllers/getProduct.js";
import { getSellProduct } from "../database/contorllers/getSellProduct.js";
const router =express.Router();
router.route("/inventory/new").post(Product);
router.route("/sellproduct").post(sellProduct);
router.route("/getAllProduct").get(getAllProducts);
router.route("/getAllSellProduct").get(getSellProduct);
export default router;