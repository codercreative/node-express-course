console.log("Express Tutorial");

const express = require("express");
const { products } = require("./data.js");
const app = express();
const peopleRouter = require("./routes/people.js");

//middleware functions first and then the route methods below...
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //res.send("Testing")
  //MUST INCLUDE:
  next();
};

//Running the logger for every request, so I don't have to repeat logging for every route
app.use(logger);

app.use(express.static("./methods-public"));

//Parses data from POST requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/people", peopleRouter);

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}!`);
  }

  res.status(401).send("Please provide credentials.");
});

// app.get("/api/v1/people", (req, res) => {
//   res.status(200).json(people);
// });

// app.post("/api/v1/people", (req, res) => {
//   if (req.body.name) {
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });
//   } else {
//     res.status(400).json({ success: false, message: "Please provide a name" });
//   }
// });

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
