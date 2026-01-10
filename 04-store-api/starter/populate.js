require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    //deleteMany optional:
    await Product.deleteMany();
    await Product.create(jsonProducts);

    console.log("SUCCCESSS!!!!");
    //exit the node.js process, after the program completes
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
