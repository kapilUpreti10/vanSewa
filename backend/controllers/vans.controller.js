import catchAsync from "../utils/catchAsync.js";
import fs from "fs";

export const getVans = catchAsync(async (req, res) => {
  const vans = JSON.parse(
    fs.readFileSync("../backend/dev-data/vans.json", "utf-8")
  );
  res.status(200).json({
    status: "success",
    data: {
      vans,
    },
  });
});

export const getVan = catchAsync(async (req, res) => {
  const vans = JSON.parse(
    fs.readFileSync("../backend/dev-data/vans.json", "utf-8")
  );
  const van = vans.find((van) => van.id === req.params.id);
  console.log(req.params.id);
  if (!van) {
    res.status(404).json({
      status: "fail",
      message: "Van not found",
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        van,
      },
    });
  }
});
