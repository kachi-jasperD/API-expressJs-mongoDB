const Todo = require("../models/todo.model");
const axios = require("axios");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
console.log("guhijoikeeqwjrfedghdfjriepfdjugjrsid");

    const todo = await Todo.create({
      userId: data.userId,
      externalId: data.id,
      title: data.title,
      completed: data.completed,
    });
    res.status(201).json(todo);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create todo", error: error.message });
  }
};

module.exports = { getTodos, createTodo };
