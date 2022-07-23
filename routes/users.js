var express = require('express');
const createUserController = require('../src/controllers/createUserController');
const getUserByUserIdController = require('../src/controllers/getUserByUserIdController');
const getUsersController = require('../src/controllers/getUsersController');
var router = express.Router();

router.get('/users', getUsersController);

router.get('/user/:userId', getUserByUserIdController);

router.post('/user', createUserController);

module.exports = router;
