import { Router } from "express";
import {
    getAboutData
} from "../controllers/about.controller.js";
const router = Router();

router.route("/").get(getAboutData);


export default router;