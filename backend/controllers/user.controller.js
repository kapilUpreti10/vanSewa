// controllers/user.controller.js
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import catchAsync from "../utils/catchAsync.js";
import customError from "../utils/customErr.js";

const { hashSync } = bcrypt;

const getUser = catchAsync(async (req, res, next) => {
  console.log("verified user is", req.verifiedUser);
  const user = await User.findById(req.verifiedUser?._id).select("-password");
  if (!user) {
    return next(customError("User not found.", 404));
  }
  res.status(200).json({
    status: "success",
    user,
  });
});

const updateUser = catchAsync(async (req, res, next) => {
  console.log(
    req.params.userId,
    req.verifiedUser._id,
    String(req.verifiedUser._id)
  );
  if (req.params.userId !== String(req.verifiedUser._id)) {
    return next(customError("You are not allowed to update this user.", 403));
  }
  if (req.body.password) {
    req.body.password = hashSync(req.body.password, 10);
  }
  const user = await User.findByIdAndUpdate(
    req.params.userId,
    {
      $set: {
        //  to prevent so that user can't update the other fields like admin id etc
        username: req.body.username,
        email: req.body.email,
        profilePic: req.body.profilePic,
        password: req.body.password,
      },
    },
    {
      new: true,
      runValidators: true, // so the all the validators in the schema will run again
    }
  );

  res.status(200).json({
    status: "success",
    message: "User updated successfully.",
    updatedUser: user,
  });
});

export { getUser, updateUser };
console.log;
