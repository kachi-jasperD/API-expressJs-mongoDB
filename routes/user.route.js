const express = require("express");
const router = express.Router();

const {
  getSignUp,
  createSignUp,
} = require("../controllers/user.controller.js");

router.get("/", getSignUp);
router.post("/", createSignUp);

module.exports = router;
