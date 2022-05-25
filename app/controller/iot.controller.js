const iot = require("../models/iot");

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
}