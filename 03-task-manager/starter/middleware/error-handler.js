const { CustomAPIError } = require("../errors/custom-error");

// Custom error handler set up via Express:
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  // Commented out return will show a very lengthy error obj
  // return res.status(500).json({ msg: err });
  // I can hard code an error message or:
  return res
    .status(500)
    .json({ msg: "Something went wrong. Please try again." });
};

module.exports = errorHandlerMiddleware;
