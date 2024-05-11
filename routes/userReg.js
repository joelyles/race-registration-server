const express = require('express');
const router = express.Router();
const createUserController = require('../controller/createUserController');

router.post('/', createUserController.handleCreateUser);

module.exports = router