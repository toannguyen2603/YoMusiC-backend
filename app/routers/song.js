const express = require("express");
const router = express.Router();


const {createSong, getAllSong } = require("../controller/song.controller");

router.post("/createSong", createSong);
router.get("/getAllSong", getAllSong);

module.exports = router;
