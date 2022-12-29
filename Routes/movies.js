const express = require ("express");
const router = express.Router ();
const moviesController = require("../Controllers/moviesController")

router.get('/', moviesController.index);
router.get('/:id', moviesController.detail);
router.get('/:id/update', moviesController.updateForm); //mostrar
router.post('/:id/update', moviesController.update) //logica


module.exports = router;

