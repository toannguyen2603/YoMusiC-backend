const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema(
    {
        nameTopic: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max:20,
        },
        imageTopic: {
            type: String,
        }
    }, { timestamps: true },
);

module.exports = mongoose.model("Topic", topicSchema);