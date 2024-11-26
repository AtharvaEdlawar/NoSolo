const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(
            'YOUR MONGODB ATLAS CLUSTOR');
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;
