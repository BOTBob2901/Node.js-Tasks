// Igor Nikonov, Saher Haddad

"use strict";

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "Text"); // Folder for text files

/**
 * Create an array of file names
 * @param {number} numOfFiles - number of files to create
 * @returns {string[]} array of file names
 */
const createFileNamesArr = function createFileNamesArr(numOfFiles) {
  const files = [];
  // Generate file names (File_1.txt, File_2.txt, ...)
  for (let i = 0; i < numOfFiles; i++) {
    files.push(`File_${i + 1}.txt`);
  }
  return files;
};

/**
 * Create and write random rows into text files
 * @param {string[]} files - list of file names
 */
const createWriteFiles = function createWriteFiles(files) {
  // Loop through all files
  files.forEach((file) => {
    fs.writeFileSync(`${dirPath}/${file}`, "", "utf-8"); // Clear old content
    let numOfRows = Math.floor(Math.random() * 20) + 1; // Random 1–20 rows
    // Write rows to file
    for (let j = 1; j < numOfRows; j++)
      fs.writeFileSync(`${dirPath}/${file}`, `${file} row ${j}\n`, {
        flag: "a", // Append line
      });
    fs.writeFileSync(`${dirPath}/${file}`, `${file} row ${numOfRows}`, {
      flag: "a", // Last line without newline
    });
  });
};

/**
 * Create one output file with grouped lines
 * Groups grow: 1, then 2, then 3, etc.
 * @param {string[]} files - list of file names
 */
const createOutputFile = function createOutputFile(files) {
  let data = [];
  let outputText = [];
  let filesData = [];

  // Read each file and split into lines
  files.forEach((file) => {
    let text = fs.readFileSync(`${dirPath}/${file}`, "utf-8");
    data = text.split("\n");
    filesData.push(data);
  });

  const maxLen = filesData.reduce((max, arr) => Math.max(max, arr.length), 0); // Longest file length

  let start = 0; // Start index
  let size = 1; // Group size

  // Loop through all groups
  while (start < maxLen) {
    const end = Math.min(start + size - 1, maxLen - 1); // End of group

    // For each file in order
    for (let f = 0; f < filesData.length; f++) {
      // Collect all lines from current group
      for (let j = start; j <= end; j++) {
        const line = filesData[f][j];
        if (line !== undefined) outputText.push(line);
      }
    }

    start = end + 1; // Move to next group
    size++; // Increase group size
  }

  // Write all lines to output file
  fs.writeFileSync(`${dirPath}/output.txt`, outputText.join("\n"), "utf-8");
};

// Export functions
module.exports = {
  createFileNamesArr,
  createWriteFiles,
  createOutputFile,
};
