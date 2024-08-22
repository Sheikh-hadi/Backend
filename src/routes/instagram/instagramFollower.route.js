import { Router } from "express";
import {getFollowerData} from "../../controllers/instagram/follower.controller.js";
const router = Router();

router.route("/").get(getFollowerData);
export default router;
