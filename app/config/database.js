require("dotenv").config();

const mongoose = require('mongoose');
// await mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASSWORD}@yomusic.oz27e.mongodb.net/${process.env.MONGOOSE_DATABASE}`,

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://yoMusic:yomusic123456@yomusic.qxzsf.mongodb.net/YoMusic`,
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