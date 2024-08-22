import { Router } from "express";
import {getLikes} from "../../controllers/instagram/likes.controller.js";
const router = Router();

router.route("/").get(getLikes);
export default router;
