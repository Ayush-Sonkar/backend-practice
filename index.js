// app.js
const express = require("express");
const app = express();
const port = 3000;

// Route-specific middleware
const routeMiddleware = (req, res, next) => {
  console.log("Route-specific middleware");
  next();
};

// Apply middleware to a specific route
app.get("/special", routeMiddleware, (req, res) => {
  res.send("This route has middleware!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("hello");
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




