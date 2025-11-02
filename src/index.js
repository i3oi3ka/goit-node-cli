// import fs from "fs";

// console.log("Hello, GoIT Node.js CLI");

// fs.readFile("./files/file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File contents:", data);
// });

import fs from "node:fs/promises";
import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";

// fs.readFile("./files/file.txt", "utf8")
//   .then((data) => {
//     console.log("File contents:", data);
//   })
//   .catch((err) => {
//     console.error("Error reading file:", err);
//   });

// const buffer = await fs.readFile("./files/file.txt", "utf8");
// console.log("File contents:", buffer);

const fileOperations = async () => {
  try {
    const { encoding } = await DetectFileEncodingAndLanguage(
      "./files/file.txt"
    );
    const buffer = await fs.readFile("./files/file.txt", encoding);
    console.log("File contents:", buffer);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

const fileOperationsAdditional = async () => {
  const result = await fs.appendFile("./files/file.txt", "\nAppended text.");
  console.log("File appended:", result);
};

// Виклик функції
fileOperations();
fileOperationsAdditional();
