const express = require("express");
const router = express.Router();


const {createSong, getAllSong , getMostLikeSong} = require("../controller/song.controller");

router.post("/createSong", createSong);
router.get("/getAllSong", getAllSong);
router.get("/getMostLikeSong",getMostLikeSong);

module.exports = router;
