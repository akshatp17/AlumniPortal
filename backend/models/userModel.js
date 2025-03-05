const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    username: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
    batch: {
      type: String,
      require: [true, "Batch is required"],
    },
    course: {
      type: String,
      require: [true, "Course is required"],
      enum: ["BE/BTech", "BCA", "BBA", "BCom"],
    },
    location: {
      type: String,
      require: [true, "location is required"],
    },
    phone: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
    },
    profession: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", userSchema);
