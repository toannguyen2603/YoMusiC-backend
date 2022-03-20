const express = require("express");
const router = express.Router();


const {createCategory, getAllCategory, getOne, updateOne, deleteOne } = require("../controller/category.controller");

router.post("/createCategory", createCategory);
router.get("/getAllCategory", getAllCategory);
router.get("/getOneCategory/:id",getOne);
router.patch("/updateOneCategory/:id",updateOne);
router.delete("/deleteOneCategory/:id",deleteOne);

module.exports = router;