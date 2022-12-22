const express = require ("express");
const router = express.Router ();
const moviesController = require("../Controllers/moviesController")

router.get('/', moviesController.index);
router.get('/:id', moviesController.detail);

module.exports = router;
