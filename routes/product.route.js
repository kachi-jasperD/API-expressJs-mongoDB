const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth.middleware.js");
const upload = require("../Middleware/upload.middleware.js");

const {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} = require("../controllers/product.controller.js");

router.get("/", auth, getProducts);
router.get("/:id", auth, getProductById);
router.post("/", auth, upload.single("image"), createProduct);
router.put("/:id", auth, updateProductById);
router.delete("/:id", auth, deleteProductById);

module.exports = router;
