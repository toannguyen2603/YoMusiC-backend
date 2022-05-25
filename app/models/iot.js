const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const iotSchema = new Schema(
    {
        ip: {
            type: String,
            trim: true
        },
        sensorName: {
            type: String,
        },
        sensorType: {
            type: String,
        },
        value: {
            type: String,
        },
    },{ timestamps: true },
);

module.exports = mongoose.model("IOT", iotSchema);