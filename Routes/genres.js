const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController')

router.get('/', genresController.index);
router.get('/:id', genresController.detail);

module.exports = router;