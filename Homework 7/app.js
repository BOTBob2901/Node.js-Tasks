// Saher Haddad , Igor Nikonov 50/1
"use strict";

const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  let pathNameFull = req.url;
  let pathNameObj = url.parse(pathNameFull, true);
  let pathName = pathNameObj.pathname;
  console.log(pathName);

  if (pathName === "/" || pathName === "/page") {
    const htmlPath = path.join(__dirname, "Templates/html/page.html");
    const fileStream = fs.createReadStream(htmlPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    fileStream.pipe(res);
  } else if (req.url.match("[.]html$")) {
    const htmlPath = path.join(__dirname, "Templates/html/", req.url);
    const fileStream = fs.createReadStream(htmlPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    fileStream.pipe(res);
  } else if (req.url.match("[.]css$")) {
    const cssPath = path.join(__dirname, "Templates/", req.url);
    const fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else if (req.url.match("[.]jpg$")) {
    const jpgPath = path.join(__dirname, "Templates/", req.url);
    const fileStream = fs.createReadStream(jpgPath);
    res.writeHead(200, { "Content-Type": "image/jpg" });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
