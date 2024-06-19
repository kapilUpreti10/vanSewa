import { signup, login, logout } from "../controllers/user.auth.controller.js";

import express from "express";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);

export default router;
