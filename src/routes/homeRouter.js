import { Router } from "express";
import { getHomeData, putHomeData } from "../controllers/home.controller.js";
const router = Router();

router.route("/").get(getHomeData);
router.route("/").put(putHomeData);

export default router;
