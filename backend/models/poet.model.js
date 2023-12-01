const mongoose = require('mongoose');

module.exports = mongoose => {
    const Poet = mongoose.model(
        "poet",
        mongoose.Schema({
            id: { type: String, required: true, unique: true },
            name: {
                us: { type: [String], required: true },
                ru: { type: [String], required: true },
                tj: { type: [String], required: true },
                kh: { type: [String], required: false },
            },
            years: {
                us: { type: [String], required: true },
                ru: { type: [String], required: true },
                tj: { type: [String], required: true },
                kh: { type: [String], required: false },
            },
            desc: {
                us: { type: String, required: true },
                ru: { type: String, required: true },
                tj: { type: String, required: true },
                kh: { type: String, required: false },
            },
            img: {
                card: { type: String, required: true },
                main: { type: String, required: true },
            },
            link: { type: String, required: true },
            sections: {
                us: { type: [String], required: true },
                ru: { type: [String], required: true },
                tj: { type: [String], required: true },
                kh: { type: [String], required: false },
            },
            bio: {
                backdrops: { type: [String] },
                quote: { type: String },
                one: {
                    us: {
                        year: { type: String },
                        slides: {
                            img: { type: String },
                            text: { type: String },
                        },
                        desc: { type: String },
                    },
                    ru: {
                        year: { type: String },
                        slides: {
                            img: { type: String },
                            text: { type: String },
                        },
                        desc: { type: String },
                    },
                    tj: {
                        year: { type: String },
                        slides: {
                            img: { type: String },
                            text: { type: String },
                        },
                        desc: { type: String },
                    },
                },
                two: {
                    us: [
                        {
                            year: { type: String },
                            image: { type: String },
                            desc: { type: String },
                        },
                    ],
                    ru: [
                        {
                            year: { type: String },
                            image: { type: String },
                            desc: { type: String },
                        },
                    ],
                    tj: [
                        {
                            year: { type: String },
                            image: { type: String },
                            desc: { type: String },
                        },
                    ],
                },
                three: {

                }
            },
        })
    );

    return Poet;
}