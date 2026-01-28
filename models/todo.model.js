// const mongoose = require("mongoose");
import mongoose from "mongoose";

const TodoSchema = mongoose.Schema(
  {
    externalId: {
      type: Number,
      required: [true, "Id is required"],
    },
    userId: {
      type: Number,
      required: [true, "UserId is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },

    completed: {
      type: Boolean,
      required: [true, "Completed is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
