const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionURL = process.env.MONGODBCONNECTION;
        await mongoose.connect(connectionURL);
        console.log("MongoDB is connected successfully✅");
    } catch (error) {
        console.log("Mongo db connection error", error);
        process.exit(1);
    }
}

module.exports = connectDB;
