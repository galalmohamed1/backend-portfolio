const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        trim: true,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "skillsCategory",
        trim: true,
        required: true
    },
},
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('skills', skillsSchema);