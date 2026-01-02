const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded request bodies

// Routes
const productRoutes = require("./routes/product.route.js");
app.use("/api/products", productRoutes);

// Database connection and server start
mongoose
  .connect(
    "mongodb+srv://ojasperduruzor_db_user:bJHmIYQ4TFvLrw4B@backenddb.7lyxptc.mongodb.net/API-expressJs-mongoDB?appName=BackendDB"
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

// APIS

// Create a new product
// app.post("/products", async (req, res) => {
//   try {
//     // const product = new Product(req.body);
//     // const savedProduct = await product.save();
//     // res.status(201).json(savedProduct);
//     const product = await Product.create(req.body);
//     res.status(201).json(product);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Get all products
// app.get("/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// Get a product by ID
// app.get("/products/:id", async (req, res) => {
//   try {
//     // const product = await Product.findById(req.params.id);
//     // if (!product) {
//     //   return res.status(404).json({ message: "Product not found" });
//     // }
//     console.log(req.params);

//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// Update a product by ID
// app.put("/products/:id", async (req, res) => {
//   try {
//     // const updatedProduct = await Product.findByIdAndUpdate(
//     //   req.params.id,
//     //   req.body,
//     //   { new: true }
//     // );
//     // if (!updatedProduct) {
//     //   return res.status(404).json({ message: "Product not found" });
//     // }
//     // res.status(200).json(updatedProduct);
//     const { id } = req.params;
//     const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
//     if (!updatedProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     const newUpdatedProduct = await Product.findById(id);
//     res.status(200).json(newUpdatedProduct);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Delete a product by ID
// app.delete("/products/:id", async (req, res) => {
//   try {
//     // const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//     // if (!deletedProduct) {
//     //   return res.status(404).json({ message: "Product not found" });
//     // }
//     // res.status(200).json({ message: "Product deleted successfully" });
//     const { id } = req.params;
//     const deletedProduct = await Product.findByIdAndDelete(id);
//     if (!deletedProduct) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
