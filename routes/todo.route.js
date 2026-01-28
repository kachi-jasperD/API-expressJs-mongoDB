const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth.middleware.js");

const { getTodos, createTodo } = require("../controllers/todo.controller.js");

router.get("/", getTodos);
router.post("/", auth, createTodo);

module.exports = router;
