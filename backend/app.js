import express from "express";
const app = express();

import dotnev from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import vanRoutes from "./routes/vans.route.js";
import globalErrHandler from "./utils/globalErrHandler.js";
import customError from "./utils/customErr.js";

app.use(cors());
dotnev.config();
app.use(express.json());
// app.use(cookieParser());
app.use(express.static("public"));

app.get((req, res, next) => {
  console.log("middleware running");
});

app.use("/api/vans", vanRoutes);

app.all("*", (req, res, next) => {
  next(customError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrHandler);
export default app;
