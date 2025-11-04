// Igor Nikonov, Saher Haddad

"use strict";

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/Text"); // Folder path for text files

let files = [];

// Create 10 file names
for (let i = 0; i < 10; i++) {
  files.push(`File_${i + 1}.txt`);
}

// Clear all files (make them empty)
files.forEach((file) => {
  fs.writeFileSync(`${dirPath}/${file}`, "", "utf-8");
});

// Write random number of rows (1–10) to each file
files.forEach((file) => {
  let i = Math.floor(Math.random() * 10) + 1; // Random number of rows
  for (let j = 1; j < i; j++)
    fs.writeFileSync(`${dirPath}/${file}`, `${file} row ${j}\n`, { flag: "a" }); // Write with newline
  fs.writeFileSync(`${dirPath}/${file}`, `${file} row ${i}`, { flag: "a" }); // Last line without newline
});

let data = [];
let outputText = [];

// Read from each file and collect rows
files.forEach((file, index) => {
  let text = fs.readFileSync(`${dirPath}/${file}`, "utf-8"); // Read file content
  data = text.split("\n"); // Split by lines
  for (let i = 0; i <= index && i < data.length; i++) {
    outputText.push(data[i]); // Take first (index + 1) lines
  }
});

// Write all selected lines to a single output file
fs.writeFileSync(`${dirPath}/output.txt`, outputText.join("\n"), "utf-8");
