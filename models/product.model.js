// const mongoose = require("mongoose");
import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      default: 0.0,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock is required"],
      default: 0,
    },
    imageUrl: {
      type: String,
      required: [false, "Image URL is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
