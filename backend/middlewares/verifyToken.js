// middleware/verifyToken.js
import catchAsync from "../utils/catchAsync.js";
import customError from "../utils/customErr.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const verifyToken = catchAsync(async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("verify token is runned and token from browser is", token);
  if (!token) {
    return next(
      customError(404, "You are not logged in. Please login to update.")
    );
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
    if (err) {
      return next(customError(401, "Unauthorized user."));
    }

    try {
      // Fetch user from database excluding the password field
      const user = await User.findOne({ email: decodedToken.email }).select(
        "-password"
      );
      console.log(user);
      if (!user) {
        return next(customError(404, "User not found."));
      }

      req.verifiedUser = user;
      next();
    } catch (error) {
      return next(customError(500, "Internal Server Error."));
    }
  });
});

export default verifyToken;
