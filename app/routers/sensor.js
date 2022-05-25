const express = require("express");
const { getSensorValue, createSensorValue } = require("../controller/sensor.controller");
const router = express.Router();

router.get("/values", getSensorValue);
router.post("/createValues", createSensorValue);


module.exports = router;