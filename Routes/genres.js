const express = require('express');
const router = express.Router();
const genresController = require('../Controllers/genresController')

router.get('/', genresController.index);
router.get('/:id', genresController.detail);

module.exports = router;