const mongoose = require('mongoose');

module.exports = mongoose => {
    const Recipe = mongoose.model(
        "recipe",
        mongoose.Schema({
            id: { type: String, required: true, unique: true },
            title: {
                us: { type: [String], required: true },
                ru: { type: [String], required: true },
                tj: { type: [String], required: true },
                kh: { type: [String], required: false },
            },
            subtitle: {
                us: { type: [String] },
                ru: { type: [String] },
                tj: { type: [String] },
                kh: { type: [String] },
            },
            mainImg: { type: String, required: true },
            sound: { type: String, required: true },
            history: {
                us: { type: Object },
                ru: { type: Object },
                tj: { type: Object },
            },
        })
    );

    return Recipe;
}