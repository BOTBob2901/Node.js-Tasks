// Saher Haddad , Igor Nikonov 50/1
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, `/Templates`);

let html = fs.readFileSync(`${dirPath}/page.html`, "utf-8");
const heading = `Book Component By Function`;
const AUTHOR = `KYLE SIMPSON`;
const author = `Kyle Simpson`;

html = html.replace(`{h1-heading}`, heading);
html = html.replace(`{AUTHOR}`, AUTHOR);
html = html.replace(`{author}`, author);

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });

  res.end(html);
});

server.listen(3000);
