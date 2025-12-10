const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      // Use next to pass to the next middleware:
      next(error);
    }
  };
};

module.exports = asyncWrapper;
