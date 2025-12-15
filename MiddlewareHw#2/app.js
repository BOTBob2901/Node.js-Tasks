const express = require("express");
const logger = require("./logger");

const app = express();
const port = 3000;

// Middleware: allows only if user=admin
const auth = (req, res, next) => {
  if (req.query.user !== "admin") {
    res.status(403).send("Access Denied");
  }
  next();
};

// Apply logger to all routes
app.use(logger);

// GET /
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// GET /public
app.get("/public", (req, res) => {
  res.send("This is public page!");
});

// GET /admin
app.get("/admin", auth, (req, res) => {
  res.send("Welcome to admin page!");
});

// Start the server
app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});
