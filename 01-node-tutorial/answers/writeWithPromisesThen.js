const { writeFile, readFile } = require("fs").promises;

writeFile("./temp.txt", "Hello Liam!\n", { flag: "a" })
  .then(() => {
    return writeFile("./temp.txt", "Hello Isabella!\n", { flag: "a" });
  })
  .then(() => {
    return writeFile("./temp.txt", "Hello Emma!\n", { flag: "a" });
  })
  .then(() => {
    return readFile("./temp.txt", "utf8");
  })
  .then((data) => {
    //data parameter is returned by readFile
    console.log(data);
  })
  .catch((error) => {
    console.log("An error occurred", error);
  });
