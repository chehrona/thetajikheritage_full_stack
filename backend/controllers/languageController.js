const db = require("../models");
const Poet = db.poet;

exports.findAll = async (req, res) => {
    try {
        const poets = await Poet.find({});
        const poetIntro = poets.map((poet) => {
            return {
                id: poet.id,
                name: poet.name,
                years: poet.years,
                desc: poet.desc,
                img: poet.img.card,
                link: poet.link
            }
        });

        console.log("I am called **********************")

        res.json(poetIntro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.findPoet = async (req, res) => {
    const id = req.query.id;

    try {
        const poet = await Poet.findOne({ id: id });

        if (!poet) {
            return res.status(404).json({ message: 'Poet not found' });
        }

        res.json(poet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};