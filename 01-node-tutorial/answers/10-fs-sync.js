const { writeFileSync, readFileSync } = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temporary", "fileA.txt");
console.log(filePath);

writeFileSync(filePath, "Hi Sam!\n");
writeFileSync(filePath, "Hi Noelle!\n", { flag: "a" });
writeFileSync(filePath, "Hi Anne!\n", { flag: "a" });

const fileATextContent = readFileSync(filePath, "utf8");
console.log(fileATextContent);
