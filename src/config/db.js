const mongoose = require("mongoose");

const mongooseDB = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
        
        return connect
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        process.exit(1);
    }
}

module.exports = mongooseDB;