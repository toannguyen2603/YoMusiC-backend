const iot = require("../models/iot");


const createSensorInformation = async(req, res) => {

    const {ip, sensorName, sensorType, value } = req.body
    try {
        const results = new iot({
            ip, 
            sensorName,
            sensorType, 
            value
        })
        await results.save();
        res.status(200).json(results)

    } catch (error) {
        res.status(500).json(error)
    }
}

const getSensorInformation = async (req, res, next) => {
    try {
        const results = await iot.find();

        res.status(200).json(results);
    } catch (error) {
        res.status(500).json(error);
    }
} 

module.exports = {
    getSensorInformation,
    createSensorInformation,
}