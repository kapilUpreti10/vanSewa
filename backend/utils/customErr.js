const customError = (message, statusCode) => {
  const err = new Error();
  err.statusCode = statusCode;
  err.message = message;
  return err;
};
export default customError;
