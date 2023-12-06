const express = require('express');
const router = express.Router();
const { getAllPoets, getPoet } = require('../controllers/languageController');

router.get('/', getAllPoets);
router.get('/poets', getPoet);

module.exports = router;