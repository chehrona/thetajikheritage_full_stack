const express = require('express');
const router = express.Router();
const { findPoet } = require('../controllers/languageController');

router.get('/', findPoet);

module.exports = router;