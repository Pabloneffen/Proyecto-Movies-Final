const express = require ("express");
const router = express.Router ();
const moviesController = require("../Controllers/moviesController")

router.get('/', moviesController.index);
router.get('/:id', moviesController.detail);

router.get('/create', moviesController.createForm);
router.post('/create', moviesController.create);


module.exports = router;

