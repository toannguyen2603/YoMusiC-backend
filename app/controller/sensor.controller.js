const sensor = require("../models/sensor");


const createSensorValue = async(req, res) => {

    const {sensorName, temperature,humidity, light} = req.body
    try {
        const results = new sensor({
            sensorName,
            temperature,
            humidity,
            light,
        })
        await results.save();
        res.status(200).json(results)

    } catch (error) {
        res.status(500).json(error)
    }
}

const getSensorValue = async (req, res, next) => {
    try {
        const results = await sensor.find();

        res.status(200).json(results);
    } catch (error) {
        res.status(500).json(error);
    }
} 

module.exports = {
    getSensorValue,
    createSensorValue,
}