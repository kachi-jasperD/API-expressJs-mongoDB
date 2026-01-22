require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded request bodies

// Routes
const productRoutes = require("./routes/product.route.js");
const usersRoutes = require("./routes/user.route.js");
const loginRoutes = require("./routes/login.route.js");

app.use("/api/products", productRoutes);
app.use("/api/signup", usersRoutes);
app.use("/api/login", loginRoutes);

// Database connection and server start
mongoose
  .connect(
    process.env.MONGO_URI,
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Connection failed", err);
  });
