const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sensorSchema = new Schema(
    {
        sensorName: {
            type: String,
            trim: true,
        },
        temperature: {
            type: String,
        },
        humidity: {
            type: String,
        },
        light: {
            type: String,
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model("Sensor", sensorSchema);
