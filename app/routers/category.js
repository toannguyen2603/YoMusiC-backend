const express = require("express");
const router = express.Router();


const {createCategory, getAllCategory, getTopicInCategory , getOne, updateOne, deleteOne } = require("../controller/category.controller");

router.post("/createCategory", createCategory);
router.get("/getAllCategory", getAllCategory);
router.get("/getOneCategory/:id",getOne);
router.patch("/updateOneCategory/:id",updateOne);
router.delete("/deleteOneCategory/:id",deleteOne);
router.get("/getTopicInCategory", getTopicInCategory);


module.exports = router;