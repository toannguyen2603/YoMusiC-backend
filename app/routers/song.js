const express = require("express");
const router = express.Router();


const {createSong } = require("../controller/song.controller");

router.post("/createSong", createSong);

module.exports = router;
