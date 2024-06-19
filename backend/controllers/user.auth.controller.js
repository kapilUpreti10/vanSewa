import catchAsync from "../utils/catchAsync.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import customError from "../utils/customErr.js";
import bcrypt from "bcryptjs";
// create and send jwt token
const cookieOptions = {
  httpOnly: true,
  sameSite: "None",
  secure: true,
  path: "/",
};
const createToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const sendToken = (user, statusCode, res) => {
  const jwtToken = createToken(user.email);
  const { password, ...rest } = user._doc;
  res.status(statusCode).cookie("jwt", jwtToken, cookieOptions).json({
    status: "success",
    token: jwtToken,
    data: rest,
  });
};

const signup = catchAsync(async (req, res, next) => {
  // this is just done how we can use custom error
  if (req.body.username === "admin" || req.body.username === "user") {
    return next(
      customError(400, "username can be used other than admin and user")
    );
  }
  if (req.body.email.split("@")[1] !== "gmail.com") {
    return next(customError(400, "only gmail.com email is allowed"));
  }
  const user = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});
const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // check if user provide email and password
  if (!email || !password) {
    return next(customError(400, "please provide email and password"));
  }
  // check if user exist and password is correct
  const userValidate = await User.findOne({ email });
  console.log(userValidate._doc); // this contains exact document that is stored in database

  if (
    !userValidate ||
    !(await userValidate.checkPassword(password, userValidate._doc.password))
  ) {
    return next(customError(401, "Invalid email or password"));
  }

  // if everything is ok, send token to client
  sendToken(userValidate, 200, res);
});
const logout = catchAsync((req, res) => {
  res.clearCookie("jwt", cookieOptions); // Clear the jwt cookie
  res
    .status(200)
    .json({ status: "success", message: "user logout successfully" });
});
export { logout, signup, login };
