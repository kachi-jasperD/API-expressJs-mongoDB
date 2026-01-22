const express = require("express");
const router = express.Router();

const { getLogin, createLogin } = require("../controllers/login.controller.js");

router.get("/", getLogin);
router.post("/", createLogin);

module.exports = router;
