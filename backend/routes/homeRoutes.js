const express = require('express');
const { findAll, update } = require('../controllers/homeStepperController');
const router = express.Router();

router.get('/', findAll);
// router.update('/', update);

module.exports = router;