// Igor Nikonov, Saher Haddad 50/1

const express = require("express");

const app = express();
const port = 3000;
let html = ""; // Stores dynamic HTML content

// Middleware for /users route
const mid = (req, res, next) => {
  html = "<h1>Hello From Users</h1>"; // Initialize HTML
  next(); // Continue to next middleware
};

// Global middleware 1
const mid1 = (req, res, next) => {
  html += "<h1>Hello1</h1>"; // Append HTML
  next();
};

// Global middleware 2
const mid2 = (req, res, next) => {
  html += "<h1>Hello2</h1>"; // Append HTML
  next();
};

// Apply middleware only for /users
app.use("/users", mid);

// Apply middleware for all routes
app.use([mid1, mid2]);

// Handle /users request
app.get("/users", (req, res) => {
  res.send(html + "<p>Igor Nikonov Class 50/1</p>");
});

// Handle /igor request
app.get("/igor", (req, res) => {
  res.send(html + "<span>have a nice day</span>");
});

// Start the server
app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});
