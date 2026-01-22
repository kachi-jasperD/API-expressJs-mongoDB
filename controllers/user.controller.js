const SignUp = require("../models/user.model.js");
const bcrypt = require("bcrypt");


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
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const signUp = new SignUp({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      role: req.body.role,
      password: hashedPassword,
    });
    await signUp.save();
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
