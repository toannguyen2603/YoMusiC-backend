const express = require("express");
const { getSensorInformation } = require("../controller/iot.controller");
const router = express.Router();

router.get("/sensors", getSensorInformation);

module.exports = router;