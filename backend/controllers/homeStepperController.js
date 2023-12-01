const db = require("../models");
const HomeStepper = db.homeStepper;

exports.findAll = async (req, res) => {
    try {
        const entries = await HomeStepper.find({});
        res.json(entries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.update = (req, res) => {
  
};