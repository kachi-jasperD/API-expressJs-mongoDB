const Login = require("../models/login.model.js");

const getLogin = async (req, res) => {
  try {
    const logins = await Login.find({});
    res.status(200).json(logins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLogin = async (req, res) => {
  try {
    const login = await Login.create(req.body);
    console.log(req.body);
    res.status(201).json(login);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getLogin,
  createLogin,
};
