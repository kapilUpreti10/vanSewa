import express from "express";
import { getUser, updateUser } from "../controllers/user.controller.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.route("/getAllUsers").get(getUser);
router.route("/user/update/:userId").patch(verifyToken, updateUser);
// router.use("/update/:userId", verifyToken);
// router.patch("/update/:userId", updateUser);

// or we can also run middleware seperately

router.route("/getUser").get(verifyToken, getUser);

export default router;
