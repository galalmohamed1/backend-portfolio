const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    liveUrl: {
      type: String,
      trim: true,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);


module.exports = mongoose.model("Project", projectSchema);