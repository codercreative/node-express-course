const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  // mongoose validation
  // Joi package
  // check in the controller

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  // just for demo, normally provided by DB!
  const id = new Date().getDate();

  //token includes payload (keep it small), secret string, options
  // just for demo, in production use long, complex and unguessable string value!!!!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNunmber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNunmber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
