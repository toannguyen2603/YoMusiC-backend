const express = require("express");
const router = express.Router();


const {createTopic, getAllTopic, getOne,getPLayListInTopic, updateOne, deleteOne } = require("../controller/topic.controller");

router.post("/createTopic", createTopic);
router.get("/getAllTopic", getAllTopic);
router.get("/getOneTopic/:id",getOne);
router.patch("/updateOneTopic/:id",updateOne);
router.delete("/deleteOneTopic/:id",deleteOne);
router.get("/getPLayListInTopic", getPLayListInTopic);

module.exports = router;
