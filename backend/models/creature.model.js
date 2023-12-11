const mongoose = require('mongoose');

module.exports = mongoose => {
    const Creature = mongoose.model(
        "creature",
        mongoose.Schema({
            id: { type: String, required: true, unique: true },
            name: {
                us: { type: [String], required: true },
                ru: { type: [String], required: true },
                tj: { type: [String], required: true },
                kh: { type: [String], required: false },
            },
            img: { type: String, required: true },
            sound: { type: String, required: true },
        })
    );

    return Creature;
}