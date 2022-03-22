const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendingSchema = new Schema(
    {
        name_song: {
            type: String,
        },
        title:{
            type: String,
            required: true,
            trim: true,
        },
        album_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Album"
        },
        playlist_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PlayList",
            require: true,
        },
        artists: {
            type: String,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            require: true,
        },
        link: {
            type:String,
            required: true,
            trim: true
        }
    }, { timestamps: true },
);

module.exports = mongoose.model("Song", trendingSchema);