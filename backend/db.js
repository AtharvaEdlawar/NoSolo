const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(
            'mongodb+srv://atharva89edlawar:GQqmt1jAHrvq3fiE@cluster0.fkdl9.mongodb.net/cosplayers?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;