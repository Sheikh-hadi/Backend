import { Router } from "express";
import { getAutoLikesData } from "../../controllers/instagram/autoLikes.controller.js";

const router = Router();
router.route('/').get(getAutoLikesData);
export default router;