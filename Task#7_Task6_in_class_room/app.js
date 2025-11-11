// Igor Nikonov, Saher Haddad.

const func = require("./functions"); // Import custom functions module
const numOfFiles = 10; // Number of files to create
const files = func.createFileNamesArr(numOfFiles); // Generate file names
func.createWriteFiles(files); // Create files and write random rows
func.createOutputFile(files); // Combine selected lines into output.txt
