// Saher Haddad , Igor Nikonov 50/1
"use strict";

// Imported Modules
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

// Create am HTTP server
const server = http.createServer(function (req, res) {
  let pathNameObj = url.parse(req.url, true);
  let pathName = pathNameObj.pathname;

  console.log(pathName); // Display the requested path in console for debugging

  // Route to Homepage
  if (pathName === "/" || pathName === "/page") {
    const htmlPath = path.join(__dirname, "Templates/html/page.html"); // Homepage html file path
    const fileStream = fs.createReadStream(htmlPath, "UTF-8"); // Create a fileStream for the file.
    res.writeHead(200, { "Content-Type": "text/html" });
    fileStream.pipe(res); // Send the file to client

    // Route to Other HTML files
  } else if (req.url.match("[.]html$")) {
    const htmlPath = path.join(__dirname, "Templates/html/", req.url); // Requested html page file path
    const fileStream = fs.createReadStream(htmlPath, "UTF-8"); // Create a fileStream for the file.
    res.writeHead(200, { "Content-Type": "text/html" });
    fileStream.pipe(res); // Send the file to client

    // Route CSS files
  } else if (req.url.match("[.]css$")) {
    const cssPath = path.join(__dirname, "Templates/", req.url); // Requested CSS file path
    const fileStream = fs.createReadStream(cssPath, "UTF-8"); // Create a fileStream for the file.
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res); // Send the file to client

    // Route Images of type jpg
  } else if (req.url.match("[.]jpg$")) {
    const jpgPath = path.join(__dirname, "Templates/", req.url); // Requested Image file path
    const fileStream = fs.createReadStream(jpgPath); // Create a fileStream for the file.
    res.writeHead(200, { "Content-Type": "image/jpg" });
    fileStream.pipe(res); // Send the file to client

    // Route Error 404: Not fount
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not found</h1>"); // Send a hardcoded message to the client
  }
});

// Run HTTP server localhost on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
