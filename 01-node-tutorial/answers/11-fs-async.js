const { writeFile } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temporary", "fileB.txt");
console.log(filePath);

writeFile(filePath, "Love\n", (err) => {
  console.log("first statement");
  if (err) {
    console.log("Error: ", err);
  } else {
    writeFile(filePath, "Peace\n", { flag: "a" }, (err) => {
      console.log("second statement");
      if (err) {
        console.log("Error: ", err);
      } else {
        writeFile(filePath, "Happiness\n", { flag: "a" }, (err) => {
          console.log("third statement");
          if (err) {
            console.log("Error: ", err);
          } else {
            console.log("done!");
          }
        });
      }
    });
  }
});
