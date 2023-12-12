const express = require('express');
const router = express.Router();
const { getAllCreatures, getCreature } = require('../controllers/customsController');

router.get('/', getAllCreatures);
router.get('/myths/', getCreature);

module.exports = router;