import { Router } from "express";
import { getAutoReelsData } from "../../controllers/instagram/autoReels.controller.js";
const router = Router();


router.route("/").get(getAutoReelsData);
export default router;
