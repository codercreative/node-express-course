require("dotenv").config();

const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");
const connectDB = require("./db/connect.js");

//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

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
