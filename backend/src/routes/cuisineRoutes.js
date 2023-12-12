const express = require('express');
const router = express.Router();
const { getAllRecipes, getRecipe } = require('../controllers/cuisineController');

router.get('/', getAllRecipes);
router.get('/recipes/', getRecipe);

module.exports = router;