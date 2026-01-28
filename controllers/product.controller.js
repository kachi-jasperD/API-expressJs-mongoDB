const Product = require("../models/product.model");
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
const cloudinary = require("../config/cloudinary.js");

// const url = cloudinary.url("cld-sample-4", {
//   transformation: [
//     { quality: "auto" },
//     { fetch_format: "auto" },
//     { width: 300, height: 300, crop: "fill" },
//   ],
// });

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//   try {
//     let imageUrl = null;

//     if (req.file) {
//       const result = await cloudinary.uploader.upload(
//         `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
//         {
//           folder: "products",
//         },
//       );

//       imageUrl = result.secure_url;
//     }

//     const product = await Product.create({
//       ...req.body,
//       imageUrl,
//       Createdby: req.user.email,
//     });

//     res.status(201).json(product);
//   } catch (error) {
//     if (error.code === 11000) {
//       return res.status(400).json({ message: "Product already exists" });
//     }
//     res.status(400).json({ message: error.message });
//   }
// };

// const createProduct = async (req, res) => {
//   try {
//     let imageUrl = null;

//     if (req.file) {
//       const result = await cloudinary.uploader.upload(
//         `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
//         {
//           folder: "products",
//         },
//       );

//       imageUrl = result.secure_url;
//     }

//     const product = await Product.create({
//       ...req.body,
//       imageUrl,
//       Createdby: req.user.email,
//     });

//     // ✅ RETURN after sending response
//     return res.status(201).json(product);
//   } catch (error) {
//     // ✅ Prevent double response
//     if (res.headersSent) {
//       return;
//     }

//     if (error.code === 11000) {
//       return res.status(400).json({ message: "Product already exists" });
//     }

//     return res.status(400).json({ message: error.message });
//   }
// };

//code could have been written like this using promises but the above is more readable
const createProduct = async (req, res) => {
  try {
    let imageUrl = null;

    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "products" }, (error, result) => {
            if (error) reject(error);
            resolve(result);
          })
          .end(req.file.buffer);
      });

      imageUrl = result.secure_url;
    }

    const product = await Product.create({
      ...req.body,
      image: imageUrl,
    });

    res.status(201).json(product);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Product already exists" });
    }
    res.status(400).json({ message: error.message });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    const newUpdatedProduct = await Product.findById(id);
    res.status(200).json(newUpdatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
