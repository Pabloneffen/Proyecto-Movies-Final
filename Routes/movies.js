var express = require ("express");
var router = express.Router ();
let moviesController = require("../Controllers/moviesController")
const { check } = require('express-validator');

router.get('/create', moviesController.createForm);
router.post('/create', moviesController.create);

router.get('/', moviesController.index);
router.get('/:id', moviesController.detail);

router.get('/:id/update', moviesController.updateForm) 
router.post('/:id/update', moviesController.update) 

router.get('/:id/delete', moviesController.deleteConfirmation)
router.post('/:id/delete', moviesController.delete)


module.exports = router;

