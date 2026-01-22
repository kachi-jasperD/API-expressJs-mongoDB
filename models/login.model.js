const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;
