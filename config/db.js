const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://adariadithya816_db_user:adithya@9059@cluster0.qfimjmp.mongodb.net/aditya");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;
