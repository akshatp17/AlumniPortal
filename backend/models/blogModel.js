const mongoose = require("mongoose");
const emailSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    title: {
      type: String,
      require: [true, "Title is required"],
    },
    body: {
      type: String,
      require: [true, "Body is required"],
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("emails", emailSchema);
