require("dotenv").config();

const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://yoMusic:yomusic123456@yomusic.oz27e.mongodb.net/YoMusic`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("MongoDB connecting .......");

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;