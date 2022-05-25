const express = require("express");
const { getSensorInformation, createSensorInformation } = require("../controller/iot.controller");
const router = express.Router();

router.get("/sensors", getSensorInformation);
router.post("/createSensor", createSensorInformation);

module.exports = router;