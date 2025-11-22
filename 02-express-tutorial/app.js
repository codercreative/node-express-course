console.log("Express Tutorial");

const express = require("express");
const { products } = require("./data.js");

const app = express();

app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((product) => product.id === idToFind);
  if (!product) {
    return res.status(404).json({ message: "That product was not found" });
  }
  res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit, price } = req.query;
  let newProductsArray = [...products];

  if (search) {
    newProductsArray = newProductsArray.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    newProductsArray = newProductsArray.slice(0, Number(limit));
  }

  if (price) {
    newProductsArray = newProductsArray.filter((product) => {
      return product.price < Number(price);
    });
  }

  if (newProductsArray.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(newProductsArray);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

//NOTES:
//🚫 app.get     GET requests -- not used yet....
//🚫 app.post    POST requests -- not used yet....
//app.put     PUT requests (update a full resource)
//app.delete  DELETE requests (remove a resource)
//app.all     (matches all http methods -- useful for 404 or "catch-all")
//app.use     (registers middleware)
//app.listen  (starts the server and listens on a part)
