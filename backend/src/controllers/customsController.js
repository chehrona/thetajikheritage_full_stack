const db = require('../models');
const Creature = db.creature;

exports.getAllCreatures = async (req, res) => {
    try {
        const creatures = await Creature.find({});
        const creatureIntro = creatures.map((creature) => {
            return {
                id: creature.id,
                name: creature.name,
                img: creature.img,
            }
        });

        res.json(creatureIntro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getCreature = async (req, res) => {
    const id = req.query.id;

    try {
        const creature = await Creature.findOne({ id: id });

        if (!creature) {
            return res.status(404).json({ message: 'Creature not found' });
        }

        res.json(creature);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};