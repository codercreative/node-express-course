require("dotenv").config();

const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");
const notFound = require("./middleware/not-found.js");
const errorHandlerMiddleware = require("./middleware/error-handler.js");

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

//app.get("/api/v1/tasks")        - gel all the tasks
//app.post("/api/v1/tasks")       - create a new task
//app.get("/api/v1/tasks/:id")    - get single task
//app.patch("/api/v1/tasks/:id")  - update task
//app.delete("/api/v1/tasks/:id") - delete task

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port: ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
