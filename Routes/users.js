var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')
const { check } = require('express-validator');


router.get('/register', usersController.registerForm);
router.post('/register', usersController.register);
router.get('/login', usersController.loginForm);
router.post('/login', usersController.login);
router.get('/unlog', usersController.unlog);

module.exports = router;