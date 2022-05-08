const express = require("express");
const router = express.Router();


const {createTopic, getAllTopic, getOne, updateOne, deleteOne, getSongForTopic } = require("../controller/topic.controller");

router.post("/createTopic", createTopic);
router.get("/getAllTopic", getAllTopic);
router.get("/getOneTopic/:id",getOne);
router.patch("/updateOneTopic/:id",updateOne);
router.delete("/deleteOneTopic/:id",deleteOne);
router.get("/getSongForTopic", getSongForTopic);

module.exports = router;
