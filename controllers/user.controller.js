const SignUp = require("../models/signup.model.js");

const getSignUp = async (req, res) => {
  try {
    const signUps = await SignUp.find({});
    res.status(200).json(signUps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSignUp = async (req, res) => {
  try {
    const signUp = await SignUp.create(req.body);
    res.status(201).json(signUp);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists",
      });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = {
  getSignUp,
  createSignUp,
};
