const globalErrHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "internal server error";
  const message = err.message || "something went wrong";
  const stack = err.stack;
  if (process.env.NODE_ENV === "development") {
    res.status(statusCode).json({
      status,
      message,
      stack,
    });
  } else {
    res.status(statusCode).json({
      status,
      message,
    });
  }
};
export default globalErrHandler;
