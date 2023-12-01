const mongoose = require('mongoose');

module.exports = mongoose => {
    const HomeStepper = mongoose.model(
        "homestepper",
        mongoose.Schema({
        num: {
            type: String,
            required: true,
        },
        text: {
            type: {
            us: {
                text: String,
                font: {
                    d: Number,
                    m: Number,
                    t: Number,
                },
                margin: {
                    d: Number,
                    m: Number,
                    t: Number,
                },
            },
            ru: {
                text: String,
                font: {
                    d: Number,
                    m: Number,
                    t: Number,
                },
                margin: {
                    d: Number,
                    m: Number,
                    t: Number,
                },
            },
            tj: {
                text: String,
                font: {
                    d: Number,
                    m: Number,
                    t: Number,
                },
                margin: {
                    d: Number,
                    m: Number,
                    t: Number,
                },
            },
            },
            required: true,
        },
        desc: {
            type: {
            us: {
                text: String,
                link: String,
            },
            ru: {
                text: String,
                link: String,
            },
            tj: {
                text: String,
                link: String,
            },
            },
            required: true,
        },
        outer: [
            {
            size: Number,
            bottom: {
                d: String,
                t: String,
            },
            right: {
                d: String,
                t: String,
            },
            },
        ],
        inner: [
            {
            size: Number,
            bottom: {
                d: String,
                t: String,
            },
            right: {
                d: String,
                t: String,
            },
            img: String,
            },
        ],
    })
);

    return HomeStepper;
}