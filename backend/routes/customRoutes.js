const express = require('express');
const router = express.Router();
const { getAllCreatures, getCreature } = require('../controllers/customController');

router.get('/', getAllCreatures);
router.get('/recipes/', getCreature);

module.exports = router;