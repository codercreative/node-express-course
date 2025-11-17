const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile("./temp.txt", "Hello Julia!\n");
    await writeFile("./temp.txt", "Hello Bella!\n", { flag: "a" });
    await writeFile("./temp.txt", "Hello Morgan!\n", { flag: "a" });
  } catch (error) {
    console.log(error);
  }
};

const reader = async () => {
  try {
    const readTempTxt = await readFile("./temp.txt", "utf8");
    console.log(readTempTxt);
  } catch (error) {
    console.log(error);
  }
};

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch (error) {
    console.log(error);
  }
};

readWrite();
