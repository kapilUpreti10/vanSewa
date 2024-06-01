import express from "express";
const router = express.Router();

import { getVans, getVan } from "../controllers/vans.controller.js";

router.route("/overview").get(getVans);
router.route("/details/:id").get(getVan);

export default router;
