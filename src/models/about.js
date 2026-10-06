const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('about', aboutSchema);