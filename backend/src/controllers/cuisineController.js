const db = require('../models');
const Recipe = db.recipe;

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        const recipeIntro = recipes.map((recipe) => {
            return {
                id: recipe.id,
                title: recipe.title,
                subtitle: recipe.subtitle,
                mainImg: recipe.mainImg,
                sound: recipe.sound
            }
        });

        res.json(recipeIntro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getRecipe = async (req, res) => {
    const id = req.query.id;

    try {
        const recipe = await Recipe.findOne({ id: id });

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.json(recipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};